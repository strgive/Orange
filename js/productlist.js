//功能点一:异步加载页头与页尾
$(function(){
  //1:加载页头
  $("#header").load("data/header.php");
  //2:加载页尾
  $("#footer").load("data/footer.php");
});


//功能点二:完成登录功能
//1:创建全局变量登录用户名
//2:创建全局变量登录用户编号
var loginUname = null;
var loginUid = null;
//3:为登录按钮绑定点击事件
$("#bt-login").click(function(){
  //4:获取用户名密码
  var u = $("[name='uname']").val();
  var p = $("[name='upwd']").val();
  //5:发送ajax POST请求
  $.ajax({
     type:"POST",
     url:"data/user_login.php",
     data:{uname:u,upwd:p},
     success:function(data){
       if(data.code<0){
         //登录失败显示错误消息
         $("p.alert").html(data.msg);
       }else{
         //隐藏模态对话框
         $(".modal").hide();
         //欢迎回来
         $("#wel1").html("欢迎"+u);
         //保存用户名和密码
         //loginUname = u;//保存用户名
         sessionStorage['loginUname']=u;
         loginUid = data.uid;//保存用户编号
         //sessionStorage['loginUid']=data.uid;
         sessionStorage.setItem('loginUid',data.uid);
         location.href='productlist.html';
       }
     },
     error:function(){
       alert("网络出现故障，请检查您的网络!");
     }
  });
  //6:接收返回数据结果
  //7:如果登录成功
  // 7.1:隐藏登录框
  // 7.2:欢迎回来
  // 7.3:保存用户名和用户编号
 // 8:显示错误信息
});



//功能三:产品列表
//1:创建函数
//2:为函数指定参数pageno
//  pageno 当前页数
function plist(pageno){
  //3:发起一个异步ajax请求
  //  data/productlist.php 参数pageno
  $.ajax({
    type:"GET",
    url:"data/product_list.php",
    data:{pageno:pageno},
    success:function(data){//data json array
        //4:接收返回数据json->js Obj
        //5:拼接字符串并且将结果保存html
        var html = "";
        for(var i=0;i<data.length;i++){
          var obj = data[i];
          html += `
<li>
<a href=""><img src="${obj.pic}" alt=""/></a>
<p>￥${obj.price}</p>
<h1><a href="">${obj.pname}</a></h1>
<div>
<a href="" class="contrast"><i></i>对比</a>
<a href="" class="p-operate"><i></i>关注</a>
<a href="${obj.pid}" class="addcart"><i></i>加入购物车</a>
</div>
</li>
          `;
        }
        $("#plist ul").html(html);
    }
  });//end ajax

//4:再次发送AJAX请求->获取总页数
  //url:data/productpage.php
  $.ajax({
    url:"data/productpage.php",
    success:function(data){
      //5:拼接字符串 ol.page <li>1</li>
      var html = "";
      for(var i=1;i<=data.page;i++){
       if(i==pageno){
        html += `
<li class="active"><a href="#">${i}</a></li>
        `;
       }else{
        html += `
<li><a href="#">${i}</a></li>
        `;
      }//if end
      }//for end
      $("ol.pager").html(html);
    }
  });
  //6:id="plist" ul (li)36   #34-43
}
//7:调用
plist(1);
//为页码添加点击功能(分页显示)
//[1][2][3][4][5]
//#注意:动态添加元素
//#建议使用jquery代理事件处理
$("ol.pager").on("click","li a",function(e){
 //1:阻止事件默认行为 a
 e.preventDefault();
 //2:获取当前页码->页数
 var pno = parseInt($(this).html());
 //3:发起异步请求，获取当前页面的产品列表
 //  并且更新分页页条 1 2 3 4 5
 plist(pno);
});



//功能四:为每个商品下面 "添加购物车"
//绑定事件
$("#plist").on("click","a.addcart",function(e){
  //1:阻止事件默认行为
  e.preventDefault();
  //2:获取产品编号
  var pid = $(this).attr("href");
  //3:获取用户编号
  //var u = loginUid;
  var u=sessionStorage.getItem('loginUid');
  //4:发送ajax请求 data/add_cart.php
  $.ajax({
    type:"POST",
    url:"data/add_cart.php",
    data:{uid:u,pid:pid},
    success:function(data){
      console.log("4:"+data);
      if(data.code>0){
        alert("添加成功:该商品己购买了"+data.pcount);
      } else{
        alert("添加失败");
      }
    },
    error:function(){
      alert("添加产品失败，请检查网络");
    }
  });
  //5:接收返回数据
});




////功能点五:点击"去购物车结算"
////获取按钮绑定点击事件
////原因:事件绑定时，元素不存在
////$("#settle_up".click()); error
//$(document.body).on("click","#settle_up",function(){
// //跳转购物车页面
// location.href = "shoppingcart.html";
//});