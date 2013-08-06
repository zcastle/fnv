<?php
$enlace = "TRABAJADOR_F2.TXT";
header("Content-disposition: attachment; filename=".$enlace);
header("Content-Type: application/octet-stream");

require_once '../../lib/dbapdo.class.php';
$conn = new dbapdo();
$query = "SELECT CONCAT(
			co_tipo_documento_empleador,
			LEFT(CONCAT(nu_documento_empleador,REPEAT(' ',15)),15),
			RIGHT(CONCAT(REPEAT('0',19),co_sede),19),
			co_tipo_documento_trabajador,
			LEFT(CONCAT(nu_documento_trabajador,REPEAT(' ',15)),15),
			LEFT(CONCAT(UCASE(ap_paterno),REPEAT(' ',100)),100),
			LEFT(CONCAT(UCASE(ap_materno),REPEAT(' ',100)),100),
			LEFT(CONCAT(UCASE(no_trabajador),REPEAT(' ',100)),100),
			LEFT(CONCAT(nu_documento_seguro,REPEAT(' ',30)),30),
			co_tipo_documento_alternativo_1,
			LEFT(CONCAT(nu_documento_alternativo_1,REPEAT(' ',15)),15),
			co_tipo_documento_alternativo_2,
			LEFT(CONCAT(nu_documento_alternativo_2,REPEAT(' ',15)),15),
			LEFT(CONCAT(DATE_FORMAT(fe_nacimiento,'%d/%m/%Y'),REPEAT(' ',10)),10),
			LEFT(CONCAT(co_trabajador_institucion,REPEAT(' ',15)),15)
			) as row
			FROM trabajador;";

$stmt = $conn->prepare($query);
$stmt->execute();
$result = $stmt->fetchAll();

$fp = fopen($enlace,"w");
foreach ($result as $row) {
	fwrite($fp, $row['row'] . PHP_EOL);
}
fclose($fp);

readfile($enlace);
?>