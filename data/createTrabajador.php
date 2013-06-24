<?php
require_once '../lib/dbapdo.class.php';
if ($_POST) {
	$conn = new dbapdo();
	try{
		$data = json_decode($_REQUEST["data"]);
		$fe_nacimiento = $data->fe_nacimiento;
		$fe_nacimiento = substr($fe_nacimiento, 6, 4) . '-' . substr($fe_nacimiento, 3, 2) . '-' . substr($fe_nacimiento, 0, 2);
		//print_r($data);
		//die();

		$query = "INSERT INTO trabajador VALUES(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

		$conn->beginTransaction();
		$stmt = $conn->prepare($query);
		$stmt->bindParam(1, $data->co_tipo_documento_empleador);
		$stmt->bindParam(2, $data->nu_documento_empleador);
		$stmt->bindParam(3, $data->co_sede);
		$stmt->bindParam(4, $data->co_tipo_documento_trabajador);
		$stmt->bindParam(5, $data->nu_documento_trabajador);
		$stmt->bindParam(6, $data->ap_paterno);
		$stmt->bindParam(7, $data->ap_materno);
		$stmt->bindParam(8, $data->no_trabajador);
		$stmt->bindParam(9, $data->nu_documento_seguro);
		$stmt->bindParam(10, $data->co_tipo_documento_alternativo_1);
		$stmt->bindParam(11, $data->nu_documento_alternativo_1);
		$stmt->bindParam(12, $data->co_tipo_documento_alternativo_2);
		$stmt->bindParam(13, $data->nu_documento_alternativo_2);
		$stmt->bindParam(14, $fe_nacimiento);
		$stmt->bindParam(15, $data->co_trabajador_institucion);
		$stmt->execute();
		$conn->commit();
		echo '{success: true}';
	}catch (PDOException $e){
		$conn->rollBack();
        echo json_encode(
            array(
                "success" => false,
                "code" => $e->getCode(),
                "message" => $e->getMessage()
        ));
	}
}
?>