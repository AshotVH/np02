<?php
    set_time_limit(0);
    ini_set('memory_limit', '4G');
    $elemId = $_GET['elemId'];
    $days = $_GET['days'];
//Connect to MySQL
    $servername = "khubua1";
    $username = "np02db";
    $password = "11Sakh42";
    $db = "np02_db";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $db);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


        $sql = "SELECT TS, VALUE_NUMBER FROM gauges_new WHERE ELEMENT_NAME='".$elemId."' AND (TS > UNIX_TIMESTAMP() * 1000 - ".$days.") AND (TS <= UNIX_TIMESTAMP() * 1000) ORDER BY TS asc";
        $result = $conn->query($sql);
        if (!$result) {
            throw new Exception("Database Error [{$this->database->errno}] {$this->database->error}");
        }

        while($row = $result->fetch_assoc()) {
            $outp .= '['  . $row["TS"] . ',';
            $outp .= $row["VALUE_NUMBER"] . '],';
        }
        $outp ='{"records":['.$outp.']}';
        $outp = substr($outp, 0, -3) .substr($outp, -2, 3);
    $conn->close();
    echo($outp);

?>