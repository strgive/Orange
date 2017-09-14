<?php
 //1:功能:获取产品表中所有记录数，依据数字计算一共几页
 //2:创建数据库连接
 //3:设置编码
 require("init.php");
 //4:创建SQL语句并且发送SQL
 $sql = "SELECT count(pid) FROM la_product";
 $result = mysqli_query($conn,$sql);
 //5:抓取一行索引数组
 $row = mysqli_fetch_row($result);
 //6:公式:$size = ceil($num/8);计算总页数
 $size = ceil($row[0]/8);
 //7:保存关联数组中
 $output = ["page"=>$size];
 //8:将数组转换json 并且发送
 //{"page":5}
 echo json_encode($output);  
?>