<?php
$enlace = "EMPLEADOR_F2.TXT";
header("Content-disposition: attachment; filename=".$enlace);
header("Content-Type: application/octet-stream");
//header('Content-type: text/plain');
//header("Content-Length: ".filesize($enlace));

require_once '../../lib/dbapdo.class.php';
$conn = new dbapdo();
$query = "SELECT CONCAT(
			co_tipo_documento_empleador,
			LEFT(CONCAT(nu_documento,REPEAT(' ',15)),15),
			RIGHT(CONCAT(REPEAT('0',19),co_sede),19),
			co_tipo_institucion,
			LEFT(CONCAT(UCASE(no_razon_social),REPEAT(' ',100)),100),
			LEFT(CONCAT(UCASE(de_sede),REPEAT(' ',100)),100),
			co_tipo_documento_representante,
			LEFT(CONCAT(nu_documento_representante,REPEAT(' ',15)),15),
			LEFT(CONCAT(UCASE(no_ap_representante),REPEAT(' ',100)),100),
			co_cargo_representante,
			LEFT(CONCAT(UCASE(correo_representante),REPEAT(' ',100)),100),
			LEFT(CONCAT(nu_telefono_representante,REPEAT(' ',20)),20),
			co_tipo_documento_alternativo_1,
			LEFT(CONCAT(nu_documento_alternativo_1,REPEAT(' ',15)),15),
			co_tipo_documento_alternativo_2,
			LEFT(CONCAT(nu_documento_alternativo_1,REPEAT(' ',15)),15)
			) as row
			FROM fnv.empleador;";

$stmt = $conn->prepare($query);
$stmt->execute();
$result = $stmt->fetchAll();

$fp = fopen($enlace,"w");
foreach ($result as $row) {
	fwrite($fp, $row['row'] . PHP_EOL);
	//echo $row['row'].'<br>';
}
fclose($fp);

readfile($enlace);
?>