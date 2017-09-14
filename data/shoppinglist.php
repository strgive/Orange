<?php
  //1:加载init.php文件
  require("init.php");
  //2:获取参数uid
  @$uid = $_REQUEST["uid"] or die('{"code":-1,"msg","用户编号是必须的"}');
  //3:创建数据库连接
  //4:设置编码
  //5:创建SQL语句并且发送SQL
  $sql  = " SELECT p.pic,p.price,p.pname,";
  $sql .= " c.count,c.cid";
  $sql .= " FROM la_user u,la_cart c,la_product p";
  $sql .= " WHERE u.uid=c.uid AND c.pid=p.pid";
  $sql .= " AND u.uid = $uid";
  $result = mysqli_query($conn,$sql);
  //6:抓取多行记录
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  //7:转换成json输出
  echo json_encode($rows);
?>