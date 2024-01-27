<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

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
    //trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

//$result = $conn->query("SELECT CompanyName, City, Country FROM Customers");

$stid = oci_parse($conn, 'select to_char(max(TS), \'DD-Mon-YYYY HH24:MM:SS\') as TS from NP02_DCS_01.VEVENTSCREEN where ALIAS like \'%MHT01%\' or ALIAS like \'%PT01%\' or ALIAS like \'%TT01%\' or ALIAS like \'%SPAREAI%\'');
oci_execute($stid);

//echo "<table border='1'>\n";
//while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
//    echo "<tr>\n";
//    foreach ($row as $item) {
//        echo "    <td>" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "&nbsp;") . "</td>\n";
//    }
//    echo "</tr>\n";
//}
//echo "</table>\n";

$outp = "";
while($rs = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
    //if ($outp != "") {$outp .= ",";}
    $outp .= '{"TimeStamp":"'  . $rs["TS"] . '",';
    $outp .= '"ExactValue":"'. $rs["VALUE_NUMBER"]     . '"},';
}
$outp ='{"records":['.$outp.']}';
oci_close($conn);

echo($outp);
?>