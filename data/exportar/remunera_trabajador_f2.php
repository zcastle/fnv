<?php
$enlace = "REMUNERA_TRABAJADOR_F2.TXT";
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
			LEFT(CONCAT(DATE_FORMAT(fe_ini_periodo_aporte,'%d/%m/%Y'),REPEAT(' ',10)),10),
			LEFT(CONCAT(DATE_FORMAT(fe_fin_periodo_aporte,'%d/%m/%Y'),REPEAT(' ',10)),10),
			co_tipo_trabajador,
			co_periodicidad_ingreso,
			co_tipo_moneda,
			RIGHT(CONCAT(REPEAT('0',15),ROUND(va_remuneracion_asegurable,2)),15),
			co_tipo_seguro,
			RIGHT(CONCAT(REPEAT('0',15),ROUND(va_aporte_seguro,2)),15),
			co_regimen_pensionario,
			RIGHT(CONCAT(REPEAT('0',15),ROUND(va_aporte_regimen_pensionario,2)),15),
			RIGHT(CONCAT(REPEAT('0',15),ROUND(va_aporte_fonavi_trabajador,2)),15),
			RIGHT(CONCAT(REPEAT('0',15),ROUND(va_aporte_fonavi_empleador,2)),15)
			) as row
			FROM remuneracion;";

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