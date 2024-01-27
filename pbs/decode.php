<?php

$id = $_POST["ID"];

$project = substr($id, 0, 1);
$system = substr($id, 1, 2);
$subsystem = substr($id, 3, 2);
$origin = substr($id, 5, 2);
$detector = substr($id, 7, 2);
$owner = substr($id, 9, 2);
$item_type = substr($id, 11, 2);
$item_number = substr($id, 13, 5);

$servername = "pbs-db.cern.ch";
$username = "pbs";
$password = "3Boudines63";
$db = "pbs";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT i.project, i.system, i.subsystem, i.origin, i.detector, i.owner, i.item_type, i.item_number, p.name as pName, t.type, c.name as cName FROM ids as i, projects as p, item_types as t, origin as c WHERE i.project = p.ID AND i.item_type = t.ID AND i.origin = c.code AND i.project = '" . $project . "' and i.system = " . $system . " and i.subsystem = " . $subsystem . " and i.origin = '" . $origin . "' and i.detector = " . $detector . " and i.owner = " . $owner . " and i.item_type = " . $item_type . " and i.item_number = " . $item_number;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Project: " . $row["pName"] . "<br/>
        System: " . $row["system"] . "<br/>
        Subsystem: " . $row["subsystem"] . "<br/>
        Origin: " . $row["cName"] . "<br/>
        Detector: " . $row["detector"] . "<br/>
        Owner: " . $row["owner"] . "<br/>
        Item type: " . $row["type"] . "<br/>
        Item number: " . $row["item_number"];
    }
} else {
    $sqlins = "INSERT INTO ids (project, system, subsystem, origin, detector, owner, item_type, item_number) VALUES ('" . $project . "', '" . $system . "', '" . $subsystem . "', '" . $origin . "', '" . $detector . "', '" . $owner . "', '" . $item_type . "', '" . $item_number . "')";
    if ($conn->query($sqlins) === TRUE) {
        //$result2 = $conn->query($sql);
        if ($result2->num_rows > 0) {
            // output data of each row
            while($row = $result2->fetch_assoc()) {
                echo "Project: " . $row["pName"] . "<br/>
                System: " . $row["system"] . "<br/>
                Subsystem: " . $row["subsystem"] . "<br/>
                Origin: " . $row["cName"] . "<br/>
                Detector: " . $row["detector"] . "<br/>
                Owner: " . $row["owner"] . "<br/>
                Item type: " . $row["type"] . "<br/>
                Item number: " . $row["item_number"];
            }
        }
        echo "New record created successfully";
    } else {
        echo "Error: " . $sqlins . "<br>" . $conn->error;
    }
}
$conn->close();

?>