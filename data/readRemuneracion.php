<?php
require_once '../lib/dbapdo.class.php';
if ($_POST) {
    $conn = new dbapdo();
    $co_tipo_documento_empleador=$_REQUEST['co_tipo_documento_empleador'];
    $nu_documento_empleador=$_REQUEST['nu_documento_empleador'];
    $co_tipo_documento_trabajador=$_REQUEST['co_tipo_documento_trabajador'];
    $nu_documento_trabajador=$_REQUEST['nu_documento_trabajador'];

    $query = "SELECT r.id, DATE_FORMAT(r.fe_ini_periodo_aporte, '%d/%m/%Y') AS fe_ini_periodo_aporte, 
                DATE_FORMAT(r.fe_fin_periodo_aporte, '%d/%m/%Y') AS fe_fin_periodo_aporte, r.co_periodicidad_ingreso, 
                r.co_tipo_moneda, r.va_remuneracion_asegurable, r.co_tipo_seguro, r.va_aporte_seguro, r.co_regimen_pensionario,
                r.va_aporte_regimen_pensionario, r.va_aporte_fonavi_trabajador, r.va_aporte_fonavi_empleador,
                r.co_tipo_documento_empleador, r.nu_documento_empleador, r.co_tipo_documento_trabajador, 
                r.nu_documento_trabajador 
                FROM remuneracion AS r WHERE 
                r.co_tipo_documento_empleador=? AND
                r.nu_documento_empleador=? AND
                r.co_tipo_documento_trabajador=? AND
                r.nu_documento_trabajador=?";

    $stmt = $conn->prepare($query);
    $stmt->bindParam(1, $co_tipo_documento_empleador);
    $stmt->bindParam(2, $nu_documento_empleador);
    $stmt->bindParam(3, $co_tipo_documento_trabajador);
    $stmt->bindParam(4, $nu_documento_trabajador);
    $stmt->execute();
    $result = $stmt->fetchAll();

    echo json_encode(
            array(
                "success" => true,
                "data" => $result
        ));
} else {
    echo "{success: false, msg: 'Ha ocurrido algun Error'}";
}
?>