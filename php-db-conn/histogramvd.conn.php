<?php

    set_time_limit(0);
    ini_set('memory_limit', '6G');
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', true);
    date_default_timezone_set('Europe/Budapest');


    $elemId = $_GET["elemId"];
    $days = $_GET["days"];
    $data = array();
    $temp = array();
    $timestamps = array();
    $outp = "";
    // $days = 0.33;
    
    if ($days == 0.33){
        $days = date("Y-m-d");
        $day = "day";
    }
    elseif ($days == 0.125){
        $days = date("Y-m-d-h");
        $day = "hour";
    }
    elseif ($days == 3.08){
        $days = date('Y-m-d',strtotime('-3 days')) . '/' . date('Y-m-d',strtotime('+1 day'));
        $day = "range";
    }
    elseif ($days == 7.08){
        $days = date('Y-m-d',strtotime('-7 days')) . '/' . date('Y-m-d',strtotime('+1 day'));
        $day = "range";
    }
    elseif ($days == 10.08){
        $days = date('Y-m-d',strtotime('-10 days')) . '/' . date('Y-m-d',strtotime('+1 day'));
        $day = "range";
    };


    // $elemId = 48201478439455;

    $json = json_decode(file_get_contents('http://npvd-cache.cern.ch:5000/raw/' .$day. '/'.$days.'/'.$elemId));
    for ($j = 0; $j < count($json); $j=$j+1) {
        // array_push($timestamps, $json[$j][0]);
        // array_push($temp, $json[$j][1]);
        $janis = strtotime($json[$j][0]) * 1000;

        $outp .= '['  . $janis . ',';
        $outp .= $json[$j][1] . '],';
    }

    $outp ='{"records":['.$outp.']}';
    $outp = substr($outp, 0, -3) .substr($outp, -2, 3);

    echo($outp);

?>