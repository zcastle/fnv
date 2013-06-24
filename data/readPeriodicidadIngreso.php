<?php

require_once '../lib/dbapdo.class.php';

if ($_POST) {
    $conn = new dbapdo();
    $query = "SELECT codigo, descripcion FROM periodicidad_ingreso ORDER BY 1;";

    $stmt = $conn->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll();

    echo json_encode(
            array(
                "data" => $result
    ));
} else {
    echo "{success: false, msg: 'Ha ocurrido algun Error'}";
}
?>