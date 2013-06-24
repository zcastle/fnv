<?php
require_once '../lib/dbapdo.class.php';
if ($_POST) {
    $conn = new dbapdo();
    try{
        $data = json_decode($_REQUEST["data"]);

        $query = "UPDATE empleador SET 
                    co_tipo_documento_empleador=?,
                    nu_documento=?,
                    co_sede=?,
                    co_tipo_institucion=?,
                    no_razon_social=?,
                    de_sede=?,
                    co_tipo_documento_representante=?,
                    nu_documento_representante=?,
                    no_ap_representante=?,
                    co_cargo_representante=?,
                    correo_representante=?,
                    nu_telefono_representante=?,
                    co_tipo_documento_alternativo_1=?,
                    nu_documento_alternativo_1=?,
                    co_tipo_documento_alternativo_2=?,
                    nu_documento_alternativo_2=?
                    WHERE id=?";

        $conn->beginTransaction();
        $stmt = $conn->prepare($query);
        $stmt->bindParam(1, $data->co_tipo_documento_empleador);
        $stmt->bindParam(2, $data->nu_documento);
        $stmt->bindParam(3, $data->co_sede);
        $stmt->bindParam(4, $data->co_tipo_institucion);
        $stmt->bindParam(5, $data->no_razon_social);
        $stmt->bindParam(6, $data->de_sede);
        $stmt->bindParam(7, $data->co_tipo_documento_representante);
        $stmt->bindParam(8, $data->nu_documento_representante);
        $stmt->bindParam(9, $data->no_ap_representante);
        $stmt->bindParam(10, $data->co_cargo_representante);
        $stmt->bindParam(11, $data->correo_representante);
        $stmt->bindParam(12, $data->nu_telefono_representante);
        $stmt->bindParam(13, $data->co_tipo_documento_alternativo_1);
        $stmt->bindParam(14, $data->nu_documento_alternativo_1);
        $stmt->bindParam(15, $data->co_tipo_documento_alternativo_2);
        $stmt->bindParam(16, $data->nu_documento_alternativo_2);
        $stmt->bindParam(17, $data->id);
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