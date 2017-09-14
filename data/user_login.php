<?php
 //1:加载init.php
 require("init.php");
 //2:获取参数 uname upwd
 @$u=$_REQUEST["uname"]or die('{"code":-2,"msg":"用户名是必须的"}');
 @$p=$_REQUEST["upwd"]or die('{"code":-3,"msg":"密码是必须的"}');
 //3:创建数据库连接
 //4:设置编码
 //5:创建SQL语句并且发送SQL
 $sql = "SELECT * FROM la_user WHERE uname='$u' AND upwd = '$p'";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_assoc($result);
 if($row!==NULL){
 $rs = ["code"=>1,"msg"=>"登录成功","uid"=>$row['uid']];
  echo json_encode($rs);
 }else{
  echo '{"code":-1,"msg":"用户名或密码有误"}';
 }