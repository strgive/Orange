<?php
//1获取注册信息 用户名 密码 确认密码
require("init.php");
@$u=$_REQUEST["uname"] or die('{"code":-1,"msg":"用户名是必须的"}');
@$p=$_REQUEST["upwd"] or die('{"code":-2,"msg":"密码是必须的"}');
//@$w=$_REQUEST["upwd1"] or die('{"code":-3,"msg":"确认密码是必须的"}');
//创建数据库连接
//3：设置编码
//4 创建sql语句并且发送sql
  $sql="INSERT INTO la_user VALUES(null,'$u','$p')";
  //5 判断
  $result=mysqli_query($conn,$sql);
  if($result===true){
    echo '{"code":1,"msg":"注册成功"}';
  }else{
    echo '{"code":-3,"msg":"注册失败"}';
  }
?>