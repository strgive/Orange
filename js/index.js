//广告轮播
$(()=>{
//  广告图片数组
  var imgs=[
    "images/ad5.jpg",
    "images/ad6.jpg",
    "images/ad7.jpg",
    "images/ad8.jpg"
  ];
  var $ulImgs=$('#imgs'),
    LIWIDTH=760,
    $ulIdxs=$("#indexs"),
    moved=0,
    interval=500,
    WAIT=3000+interval,
    timer=null;
  var str="",strIdxs="",i=1;
  for(var src of imgs){
    str+=`<li><a href="detail.html"><img src="${src}"></a></li>`;
    strIdxs+=`<li>${i++}</li>`;
  }
  str+=`<li><a href="detail.html"><img src="${imgs[0]}"></a></li>`
  $ulImgs.append(str).css('width',(imgs.length+1)*LIWIDTH);
  $ulIdxs.append(strIdxs).children().first().addClass("hover");
  //启动周期性定时器
  function play(){
    timer=setInterval(()=>{
      moved++;
      $ulImgs.animate({
        left:-moved*LIWIDTH
      },interval,()=>{//每次移动后判断
        if(moved==4){//如果移动到最后一张
          moved=0;//就返回第一张
          $ulImgs.css("left",0);
        }
        //将$ulIdxc下第moved个li设为hover
        $ulIdxs.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
      })//每次移动耗时0.5s
    },WAIT);//每隔3.5秒移动一次
  }
  play();
  //当鼠标进入slider时
  $("#slider").hover(
    ()=>{
      clearInterval(timer);
      timer=null;
    },
      ()=>play()
  );
  //为$ulIdxs绑定单击事件
  $ulIdxs.on("click","li",e=>{
    var $tar=$(e.target);
    moved=$tar.index();
    $ulImgs.stop(true).animate({
      left:-moved*LIWIDTH
    },interval,()=>{
      $tar.addClass("hover").siblings().removeClass("hover");
    })
  });
})