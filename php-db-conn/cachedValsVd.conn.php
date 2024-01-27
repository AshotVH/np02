<?php

    set_time_limit(0);
    ini_set('memory_limit', '6G');
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', true);

    $elemId = $_GET["elemId"];
    $data = array();
    $temp = array();
    $timestamps = array();
    
    $json = json_decode(file_get_contents('http://npvd-cache.cern.ch:5000/raw/current/'.$elemId));
    for ($j = 0; $j < count($json); $j=$j+1) {
        array_push($timestamps, $json[$j][0][0]);
        array_push($temp, $json[$j][0][1]);
    }
    array_push($temp, strtotime(max($timestamps)));
    echo(json_encode($temp));
?>