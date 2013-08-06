<?php
$enlace = "RESUMEN.TXT";
header("Content-disposition: attachment; filename=".$enlace);
header("Content-Type: application/octet-stream");
//header('Content-type: text/plain');
//header("Content-Length: ".filesize($enlace));

require_once '../../lib/dbapdo.class.php';
$conn = new dbapdo();
$queryE = "SELECT COUNT(*) AS COUNT FROM empleador;";
$queryT = "SELECT COUNT(*) AS COUNT FROM trabajador;";
$queryR = "SELECT COUNT(*) AS COUNT FROM remuneracion;";

$stmtE = $conn->prepare($queryE);
$stmtE->execute();
$resultE = $stmtE->fetch(PDO::FETCH_OBJ);

$stmtT = $conn->prepare($queryT);
$stmtT->execute();
$resultT = $stmtT->fetch(PDO::FETCH_OBJ);

$stmtR = $conn->prepare($queryR);
$stmtR->execute();
$resultR = $stmtR->fetch(PDO::FETCH_OBJ);

$fp = fopen($enlace,"w");

if($resultE->COUNT>1){
	fwrite($fp, 'ARCHIVO EMPLEADOR_F2.TXT: '.$resultE->COUNT.' REGISTROS'. PHP_EOL);
}else{
	fwrite($fp, 'ARCHIVO EMPLEADOR_F2.TXT: '.$resultE->COUNT.' REGISTRO'. PHP_EOL);
}
fwrite($fp, 'ARCHIVO TRABAJADOR_F2.TXT: '.$resultT->COUNT.' REGISTROS'. PHP_EOL);
fwrite($fp, 'ARCHIVO REMUNERA_TRABAJADOR_F2.TXT: '.$resultR->COUNT.' REGISTROS'. PHP_EOL);

fclose($fp);

readfile($enlace);
?>