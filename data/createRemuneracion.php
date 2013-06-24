<?php
require_once '../lib/dbapdo.class.php';
if ($_POST) {
	$conn = new dbapdo();
	$conn->beginTransaction();
	try{
		$dat = json_decode($_REQUEST["data"]);
		$data = array();
		if(COUNT($data)<2){
			$data[] = $dat;
		}else{
			$data = $dat;
		}

		$query = "INSERT INTO remuneracion VALUES(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		/*$queryDelete = "DELETE FROM remuneracion WHERE 
						co_tipo_documento_empleador=? AND
						nu_documento_empleador=? AND
						co_tipo_documento_trabajador=? AND
						nu_documento_trabajador=?";

		$stmtDelete = $conn->prepare($queryDelete);
		$stmtDelete->bindParam(1, $data[0]->co_tipo_documento_empleador);
		$stmtDelete->bindParam(2, $data[0]->nu_documento_empleador);
		$stmtDelete->bindParam(3, $data[0]->co_tipo_documento_trabajador);
		$stmtDelete->bindParam(4, $data[0]->nu_documento_trabajador);
		$stmtDelete->execute();*/
		
		$stmt = $conn->prepare($query);
		foreach ($data as $row) {
			$fe_ini_periodo_aporte = $row->fe_ini_periodo_aporte;
			$fe_ini_periodo_aporte = substr($fe_ini_periodo_aporte, 6, 4) . '-' . substr($fe_ini_periodo_aporte, 3, 2) . '-' . substr($fe_ini_periodo_aporte, 0, 2);
			$fe_fin_periodo_aporte = $row->fe_fin_periodo_aporte;
			$fe_fin_periodo_aporte = substr($fe_fin_periodo_aporte, 6, 4) . '-' . substr($fe_fin_periodo_aporte, 3, 2) . '-' . substr($fe_fin_periodo_aporte, 0, 2);

			$stmt->bindParam(1, $row->co_tipo_documento_empleador);
			$stmt->bindParam(2, $row->nu_documento_empleador);
			$stmt->bindParam(3, $row->co_sede);
			$stmt->bindParam(4, $row->co_tipo_documento_trabajador);
			$stmt->bindParam(5, $row->nu_documento_trabajador);
			$stmt->bindParam(6, $fe_ini_periodo_aporte);
			$stmt->bindParam(7, $fe_fin_periodo_aporte);
			$stmt->bindParam(8, $row->co_tipo_trabajador); //Segun tabla 3: Ejem 21
			$stmt->bindParam(9, $row->co_periodicidad_ingreso);
			$stmt->bindParam(10, $row->co_tipo_moneda);
			$stmt->bindParam(11, $row->va_remuneracion_asegurable);
			$stmt->bindParam(12, $row->co_tipo_seguro);
			$stmt->bindParam(13, $row->va_aporte_seguro);
			$stmt->bindParam(14, $row->co_regimen_pensionario);
			$stmt->bindParam(15, $row->va_aporte_regimen_pensionario);
			$stmt->bindParam(16, $row->va_aporte_fonavi_trabajador);
			$stmt->bindParam(17, $row->va_aporte_fonavi_empleador);
			$stmt->execute();
		}
		$conn->commit();

		echo json_encode(
            array(
                "success" => true,
                "data" => $data
        ));
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