//鼠标进入小图片，切换显示中图片
var imgList=document.getElementById("smallpic");
var mImg=document.getElementById("mImg");
//利用冒泡，为ulList统一绑定一次鼠标进入事件
imgList.onmouseover=function(e){
  if(e.target.nodeName=="IMG"){
    //获得当前图片的src
    var src=e.target.src;
    //查找_的位置
    var i=src.indexOf("_");
    //设置mImg的src为：
    //选取src中0~i+1之前的子字符串 + mid +src中i到结尾的剩余子字符
    mImg.src=src.slice(0,i+1)+"mid"+src.slice(i+6);
  }
}
//让mask跟随鼠标移动
var mask=document.getElementById("mask");
var sMask=document.getElementById("superMask");
var MSIZE=175;
var largeDiv=document.getElementById("largeDiv");
//为sMask绑定鼠标进入和鼠标移出事件
sMask.onmouseover=function(){
  mask.style.display="block";
  largeDiv.style.display="block";
  //根据mImg的src,修改largeDiv的背景图片
  var src=mImg.src;
  var i=src.indexOf("_");
  src=src.slice(0,i)+".jpg";
  largeDiv.style.backgroundImage="url("+src+")";
};
sMask.onmouseout=function(){
  mask.style.display="none";
  largeDiv.style.display="none";
};
//为sMask绑定鼠标移动事件
sMask.onmousemove=function(e){
  var top=e.offsetY-MSIZE/2;
  var left=e.offsetX-MSIZE/2;
  if(top<0) top=0;
  else if(top>175) top=175;
  if(left<0) left=0;
  else if(left>175) left=175;
  mask.style.top=top+"px";
  mask.style.left=left+"px";
  largeDiv.style.backgroundPosition=-16/7*left+"px "+ -16/7*top+"px";
}