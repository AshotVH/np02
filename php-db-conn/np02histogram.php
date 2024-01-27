<?php
set_time_limit(0);
ini_set('memory_limit', '6G');
ini_set('error_reporting', E_ALL);
ini_set('display_errors', true);

$elemId = $_GET["elemid"];
$rangeType = $_GET["rangetype"];
$range = $_GET["range"];
if ($rangeType === "last") {
    $daysAndHours = explode(":", $range);
    $days = intval($daysAndHours[0]);
    $hours = intval($daysAndHours[1]);
    $timeRangeEnd = time();
    $timeRangeStart = $timeRangeEnd - $days * 86400 - $hours * 3600;
    $dateEnd = substr(date(DATE_ATOM, $timeRangeEnd), 0, 19);
    $dateStart = substr(date(DATE_ATOM, $timeRangeStart), 0, 19);
    $dateInterval = $dateStart . "_" . $dateEnd;
    $url = "http://188.185.78.106:5000/range/" . $dateStart . "/" . $dateEnd . "/" . $elemId;
    $json = json_decode(file_get_contents($url));
    $responseArr = [];
    foreach ($json as $key => $value) {
        $key = intval($key);
        $value = round($value, 2);
        $responseArr[$key] = $value;
    }
    $responseArr["dateInterval"] = $dateInterval;
    echo(json_encode($responseArr));

}
$url = "http://188.185.78.106:5000/range/2023-10-10T07:42:12/2023-10-10T07:59:43/" . $elemId;
// $json = json_decode(file_get_contents($url));
// echo(json_encode($json));
$result = $elemId . "---" . $rangeType . "---" . $range;
$t = time();
// echo(date(DATE_ISO8601,$t));
// echo($result);

?>