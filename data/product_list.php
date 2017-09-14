<?php
 //功能:依据客户端传递参数页数 1 2 3 4
 //     获取指定产品列表并且转换json格式字符串发送
 //1:获取参数 pageno {pageno页数}
 @$pageno = $_REQUEST["pageno"]or die('{"code":-2,"msg":"页数是必须的"}');
 //2:创建数据库连接
 //3:设置编码
 require("init.php");
 //4:创建SQL语句并且发送SQL
 //#公式:(pageno-1)*8=m
 //#SELECT * FROM la_product LIMIT m,n
 //pageSize 页大小(一页中记录数)
 $pageSize = 8;
 //offset 偏移量
 $offset = ($pageno-1)*$pageSize;
 $sql = "SELECT * FROM la_product LIMIT $offset,$pageSize";
 $result = mysqli_query($conn,$sql);
 //5:抓取多条记录
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 //$rows 二维数组
 //[{"pid":1,"pname":"aa"},{"pid":2,"pname":"b"}]
 //6:并且转换json字符中输出
 echo json_encode($rows);
?>