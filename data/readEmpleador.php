<?php
require_once '../lib/dbapdo.class.php';
if ($_POST) {
    $conn = new dbapdo();
    $start = $_REQUEST['start'];
    $limit = $_REQUEST['limit'];
    $textbuscar = $_REQUEST['textbuscar'];

    $query = "SELECT e.id, e.co_tipo_documento_empleador, td1.descripcion AS no_tipo_documento_empleador, e.nu_documento, 
                e.co_sede, e.co_tipo_institucion, ti.descripcion AS no_tipo_institucion, e.no_razon_social, e.de_sede, 
                e.co_tipo_documento_representante, td2.descripcion AS no_tipo_documento_representante, 
                e.nu_documento_representante, e.no_ap_representante, e.co_cargo_representante, c.descripcion AS no_cargo_representante, 
                e.correo_representante, e.nu_telefono_representante, e.co_tipo_documento_alternativo_1, td3.descripcion AS no_tipo_documento_alternativo_1, 
                e.nu_documento_alternativo_1, e.co_tipo_documento_alternativo_2, td4.descripcion AS no_tipo_documento_alternativo_2, e.nu_documento_alternativo_2
                FROM ((((((empleador AS e INNER JOIN tipo_documento AS td1 ON e.co_tipo_documento_empleador=td1.codigo)
                INNER JOIN tipo_institucion AS ti ON e.co_tipo_institucion=ti.codigo)
                INNER JOIN tipo_documento AS td2 ON e.co_tipo_documento_representante=td2.codigo)
                INNER JOIN cargo AS c ON e.co_cargo_representante=c.codigo)
                LEFT JOIN tipo_documento AS td3 ON e.co_tipo_documento_alternativo_1=td3.codigo)
                LEFT JOIN tipo_documento AS td4 ON e.co_tipo_documento_alternativo_2=td4.codigo)";

    if ($textbuscar) {
        $query .= " WHERE ";
        $claves=explode(" ", $textbuscar);
        foreach ($claves as $v) {
            $condicion[] = "e.nu_documento LIKE '%$v%'";
            $condicion[] = "e.no_razon_social LIKE '%$v%'";
        }
        $query .= implode(" OR ", $condicion);
    }

    $query .= " ORDER BY e.no_razon_social LIMIT $start, $limit;";

    $stmt = $conn->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll();

    $queryCount = "SELECT COUNT(*) AS count FROM empleador AS e";
    if ($textbuscar) {
        $queryCount .= " WHERE ";
        $claves=explode(" ", $textbuscar);
        foreach ($claves as $v) {
            $condicion[] = "e.nu_documento LIKE '%$v%'";
            $condicion[] = "e.no_razon_social LIKE '%$v%'";
        }
        $queryCount .= implode(" OR ", $condicion);
    }
    $stmtCount = $conn->prepare($queryCount);
    $stmtCount->execute();
    $rows = $stmtCount->fetch(PDO::FETCH_OBJ);

    echo json_encode(
            array(
                "success" => true,
                "totalCount" => $rows->count,
                "data" => $result
        ));
} else {
    echo "{success: false, msg: 'Ha ocurrido algun Error'}";
}
?>