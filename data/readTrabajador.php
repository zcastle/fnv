<?php
require_once '../lib/dbapdo.class.php';
if ($_POST) {
    $conn = new dbapdo();
    $start = $_REQUEST['start'];
    $limit = $_REQUEST['limit'];
    $textbuscar = $_REQUEST['textbuscar'];

    $query = "SELECT t.id, e.co_tipo_institucion, t.co_tipo_documento_empleador, td1.descripcion AS no_tipo_documento_empleador, 
                t.nu_documento_empleador, t.co_sede, e.no_razon_social, t.co_tipo_documento_trabajador, 
                td2.descripcion AS no_tipo_documento_trabajador, t.nu_documento_trabajador, t.ap_paterno, t.ap_materno, 
                t.no_trabajador, t.nu_documento_seguro, t.co_tipo_documento_alternativo_1, 
                td3.descripcion AS no_tipo_documento_alternativo_1, t.nu_documento_alternativo_1, 
                t.co_tipo_documento_alternativo_2, td4.descripcion AS no_tipo_documento_alternativo_2, 
                t.nu_documento_alternativo_2, DATE_FORMAT(t.fe_nacimiento, '%d/%m/%Y') AS fe_nacimiento, t.co_trabajador_institucion
                FROM (((((trabajador AS t INNER JOIN tipo_documento AS td1 ON t.co_tipo_documento_empleador=td1.codigo)
                INNER JOIN tipo_documento AS td2 ON t.co_tipo_documento_trabajador=td2.codigo)
                INNER JOIN empleador AS e ON t.co_tipo_documento_empleador=e.co_tipo_documento_empleador AND t.nu_documento_empleador=e.nu_documento)
                LEFT JOIN tipo_documento AS td3 ON t.co_tipo_documento_alternativo_1=td3.codigo)
                LEFT JOIN tipo_documento AS td4 ON t.co_tipo_documento_alternativo_2=td4.codigo)";

    if ($textbuscar) {
        $query .= " WHERE ";
        $claves=explode(" ", $textbuscar);
        foreach ($claves as $v) {
            $condicion[] = "t.ap_paterno LIKE '%$v%'";
            $condicion[] = "t.ap_materno LIKE '%$v%'";
            $condicion[] = "t.no_trabajador LIKE '%$v%'";
            $condicion[] = "t.nu_documento_trabajador LIKE '%$v%'";
        }
        $query .= implode(" OR ", $condicion);
    }

    $query.=" ORDER BY t.ap_paterno, t.ap_materno, t.no_trabajador LIMIT $start, $limit;";

    $stmt = $conn->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll();

    $queryCount = "SELECT COUNT(*) AS count
                    FROM (((((trabajador AS t INNER JOIN tipo_documento AS td1 ON t.co_tipo_documento_empleador=td1.codigo)
                    INNER JOIN tipo_documento AS td2 ON t.co_tipo_documento_trabajador=td2.codigo)
                    INNER JOIN empleador AS e ON t.co_tipo_documento_empleador=e.co_tipo_documento_empleador AND t.nu_documento_empleador=e.nu_documento)
                    LEFT JOIN tipo_documento AS td3 ON t.co_tipo_documento_alternativo_1=td3.codigo)
                    LEFT JOIN tipo_documento AS td4 ON t.co_tipo_documento_alternativo_2=td4.codigo)";
    if ($textbuscar) {
        $queryCount .= " WHERE ";
        $claves=explode(" ", $textbuscar);
        foreach ($claves as $v) {
            $condicion[] = "t.ap_paterno LIKE '$v%'";
            $condicion[] = "t.ap_materno LIKE '$v%'";
            $condicion[] = "t.no_trabajador LIKE '$v%'";
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
                "data" => $result,
                'query' => $query
        ));
} else {
    echo "{success: false, msg: 'Ha ocurrido algun Error'}";
}
?>