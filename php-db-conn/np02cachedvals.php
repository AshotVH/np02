<?php
set_time_limit(0);
ini_set('memory_limit', '6G');
ini_set('error_reporting', E_ALL);
ini_set('display_errors', true);
// $api_address = getenv("API_ADDRESS");


$elemName = $_GET["elemName"];
// $url = $api_address."/latest/" . $elemName;
// $json = json_decode(file_get_contents($url));
// echo(json_encode($json));
// echo($api_address);
echo(json_encode($elemName));

?>