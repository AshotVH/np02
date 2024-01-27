<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
    set_time_limit(0);
    ini_set('memory_limit', '6G');

    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', true);

$days = $_GET["days"];
$elemId = $_GET["elemId"];
$db = '(DESCRIPTION=
      	(ADDRESS= (PROTOCOL=TCP) (HOST=pdbr1-s.cern.ch) (PORT=10121) )
      	(LOAD_BALANCE=on)
      	(ENABLE=BROKEN)
      	(CONNECT_DATA=
      		(SERVER=DEDICATED)
      		(SERVICE_NAME=PDBR.cern.ch)
      	)
      )';

$conn = oci_connect("np02dbro", "5Pontekorvo50!", $db);

if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}


$stid = oci_parse($conn, "select substr(extract(day from (TS - TIMESTAMP '1970-01-01 00:00:00' AT TIME ZONE 'UTC')) * 24 * 60 * 60 + extract(hour from (TS - TIMESTAMP '1970-01-01 00:00:00' AT TIME ZONE 'UTC')) * 60 * 60 + extract(minute from (TS - TIMESTAMP '1970-01-01 00:00:00' AT TIME ZONE 'UTC')) * 60 + trunc(extract(second from (TS - TIMESTAMP '1970-01-01 00:00:00' AT TIME ZONE 'UTC')),0),0,15)*1000 as TS, VALUE_NUMBER from (select * from NP02_DCS_01.VEVENTSCREEN order by TS asc) where ELEMENT_ID = :elID and TS >= sysdate - :days");


oci_bind_by_name($stid, ':elID', $elemId);
oci_bind_by_name($stid, ':days', $days);

oci_execute($stid);

$outp = "";
while($rs = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
    if ((strlen($rs["VALUE_NUMBER"]) < 1) || ($rs["VALUE_NUMBER"] == "Nan")) {
        continue;
    }
    if ($rs["VALUE_NUMBER"] =="Inf") {
        $rs["VALUE_NUMBER"] = 0;
    }
    $outp .= '['  . $rs["TS"] . ',';
    $outp .= $rs["VALUE_NUMBER"] . '],';
}
    $outp ='{"records":['.$outp.']}';
    $outp = substr($outp, 0, -3) .substr($outp, -2, 3);
oci_close($conn);

echo($outp);
?>