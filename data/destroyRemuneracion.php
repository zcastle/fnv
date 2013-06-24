<?php
require_once '../lib/dbapdo.class.php';
if ($_POST) {
    $conn = new dbapdo();
    $data = json_decode($_REQUEST["data"]);
    if($data->id){
	    $query = "DELETE FROM remuneracion WHERE id=?";
	    $stmt = $conn->prepare($query);
	    $stmt->bindParam(1, $data->id);
	    $stmt->execute();
	}
    echo '{success: true}';
}
?>