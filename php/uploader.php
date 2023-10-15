<?php

/* echo "Hola enviado desde el server";
var_dump($_FILES); */

if(isset($_FILES["file"])){

$name=$_FILES["file"]["name"];
$file=$_FILES["file"]["temp_name"];
$erro=$_FILES["file"]["error"];
$destination="../php/img/$name";
$upload=move_uploaded_file($file,$destination);

if($upload){
    $res=array(
        "err"=>false,
        "status"=>http_response_code(200),
        "statusText"=>  "Archivo $name subido con exito",
        "files"=>$_FILES("file")
    );
}else{
    $res= array(
        "err"=>true,
        "status"=>http_response_code(400),
        "statusText"=>  "Error al Subir el Archivo $name",
        "files"=>$_FILES("file")
    );
}

echo $res;

}
?>