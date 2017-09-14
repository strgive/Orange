<?php
//1:加载指定文件init.php
require("init.php");
//2:获取用户提交参数uid pid
@$uid=$_REQUEST["uid"]or die('{"code":-2,"msg":"用户编号是必须的"}');
@$pid=$_REQUEST["pid"]or die('{"code":-3,"msg":"产品编号是必须的"}');
//3:创建SQL语句并且发送SQL语句
//  查询指定用户是否购买过此产品
$sql = "SELECT * FROM la_cart WHERE uid=$uid AND pid = $pid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
$pcount = 1;
if($row===null){
//4:如果指定用户没有购买过此产品添加
$sql = "INSERT INTO la_cart VALUES(null,$pid,$uid,1)";
mysqli_query($conn,$sql);
//echo '{"code":1,"msg":"添加成功"}';
}else{
//5:如果指定用户购买过此产品更新
$sql = "UPDATE la_cart SET count=count+1";
$sql .= " WHERE uid=$uid AND pid=$pid";
mysqli_query($conn,$sql);
$pcount = $row["count"]+1;
}
//6:返回数据
//code msg pcount
$output = ["code"=>1,"msg"=>"添加成功",
"pcount"=>$pcount];
echo json_encode($output);
?>