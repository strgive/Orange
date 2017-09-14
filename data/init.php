<?php
header("Content-Type:application/json;charset=utf-8");
//2:创建数据库连接
$conn = mysqli_connect("127.0.0.1","root","","la");
//$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
//3:设置编码
mysqli_query($conn,"SET NAMES UTF8");
?>