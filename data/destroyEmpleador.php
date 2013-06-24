<?php
require_once '../lib/dbapdo.class.php';
if ($_POST) {
    $conn = new dbapdo();
    $data = json_decode($_REQUEST["data"]);

    $query = "DELETE FROM empleador WHERE id=?";

    $stmt = $conn->prepare($query);
    $stmt->bindParam(1, $data->id);
    $stmt->execute();

    echo '{success: true}';
}
?>