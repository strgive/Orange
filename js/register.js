
//功能点一:异步加载页尾
$(function(){
  //1:加载页尾
  $("#footer").load("data/footer.php");
});

//1 获取按钮bt-register
//2 为按钮绑定点击事件
$("#bt-register").click(function(){
  //获取用户名 密码 确认密码
  var u=$("#uname").val();
  var p=$("#upwd").val();
  var w=$("#upwd1").val();
  //验证用户名
  var unamereg=/^[a-z0-9]{6,12}$/i;
  if(!unamereg.test($("#uname").val())){
    alert("用户名格式不正确");
    return;
  }
  //验证密码
  var upwdreg=/^[a-z0-9]{6,12}$/i;
  if(!unamereg.test($("#upwd").val())){
    alert("密码格式不正确");
    return;
  }
  //验证确认密码
  if($("#upwd").val()!=$("#upwd1").val()){
    alert("确认密码与设置密码不相同，请重填");
    return;
  }
  //验证通过
  var u=$("#uname").val();
  var p=$("#upwd").val();
  $.ajax({
    type:"GET",
    url:"data/user_register.php",
    data:{uname:u,upwd:p},
    success:function(data){
      if(data.code<0){
        alert(data.msg);
      }else{
        alert(data.msg);
        location.href="login.html";
      }
    }
  })
})



//功能点二:判断注册的用户名是否存在
uname.onblur = function(){
  //1:获取用户输入用户名
  var u=$("#uname").val();
  var p=$("#upwd").val();
  //2:发送ajax请求
  $.ajax({
    url:"data/user_test.php",
    data:{uname:u},
    success:function(data){
      //console.log(data);
      //获取返回结果
      if(data.code>0){
        $(".d1").html(data.msg).css({
          color:"red"
        })
      }else{
        $(".tipMsg").html(data.msg).css({
          color:"red"
        })
      }
    }
  });
}