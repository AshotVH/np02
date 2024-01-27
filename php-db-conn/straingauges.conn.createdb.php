<?php
    require_once("../dependencies/simplexlsx.class.php");
    $file = $_GET['file'];
    set_time_limit(0);
    ini_set('memory_limit', '6G');
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', true);

    if ( $xlsx = SimpleXLSX::parse('../data/'.$file.'.XLSX') ) {
        $arr = $xlsx->rows();

        //Removes excess spaces from element names
    	for ($i = 0; $i < sizeof($arr[1]); $i++) {
    	    $arr[1][$i] = preg_replace('/\s+/', '', $arr[1][$i]);
    	}

    	$tmpTime = preg_replace('!\s+!', ' ', $arr[4][0]);
    	preg_match ("#(\d+).(\d+).(\d+)(\s+)(\d+):(\d+):(\d+)#", $tmpTime, $date);
    	echo(json_encode($date).'<br/>');
    	$stTime = mktime((int)$date[5], (int)$date[6], (int)$date[7], (int)$date[2], (int)$date[1], (int)$date[3]);
    	echo $stTime.'<br/>';
        $startTime = $stTime * 1000;
        echo $startTime.'<br/>';

        //Removes time columns
        $k = array_search('Time2-defaultsamplerate', $arr[1]);
        if ($k > -1) {
            for ($i = 0; $i < sizeof($arr); $i++) {
                array_splice($arr[$i], $k, 1);
            }
        }
        $k = array_search('Time3-defaultsamplerate', $arr[1]);
        if ($k > -1) {
            for ($i = 0; $i < sizeof($arr); $i++) {
                array_splice($arr[$i], $k, 1);
            }
        }
        $k = array_search('Time4-defaultsamplerate', $arr[1]);
        if ($k > -1) {
            for ($i = 0; $i < sizeof($arr); $i++) {
                array_splice($arr[$i], $k, 1);
            }
        }
        $k = array_search('Time5-defaultsamplerate', $arr[1]);
        if ($k > -1) {
            for ($i = 0; $i < sizeof($arr); $i++) {
                array_splice($arr[$i], $k, 1);
            }
        }

        echo(json_encode(sizeof($arr))."<br/>");

        //Transposes the data
        for ($i = 0; $i < sizeof($arr[1]); $i++) {
            for ($j = 0; $j < sizeof($arr); $j++) {
                $trarr[$i][$j] = $arr[$j][$i];
            }
        }
        $res = array();
        $timestamp = $startTime;

        //Creates result array to insert into MySQL
        for ($i = 0; $i < sizeof($trarr); $i++) {
            for ($j = 34; $j < sizeof($trarr[$i]); $j++) {
                $timestamp = $timestamp + 10000;
                $tmp[0] = $timestamp;
                $tmp[1] = $trarr[$i][1];
                $tmp[2] = $trarr[$i][$j];
                $res[] = $tmp;
            }
        }

        echo(json_encode(sizeof($res))."<br/>");

    	//Connect to MySQL
        $servername = "khubua";
        $username = "np02db";
        $password = "11Sakh42";
        $db = "np02_db";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $db);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        echo "Connected successfully";

        //Insert data into MySQL
        foreach($res as $single_data) {
            $sql = "INSERT INTO `gauges_new` (`TS`, `ELEMENT_NAME`, `VALUE_NUMBER`) VALUES (".$single_data[0].", '".$single_data[1]."', ".$single_data[2].");";
            $insertstatement = mysqli_query($conn,$sql);
        }

        mysqli_close($conn);
    } else {
    	echo SimpleXLSX::parse_error();
    }


?>