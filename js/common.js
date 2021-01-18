//加载底部
$('footer').load('../page/footer.html');
//导航
$('.cen_nav li').click(function () {
    $(".cen_nav li").eq($(this).index()).addClass("active").siblings().removeClass("active");
});
//轮播
$("#carousel").FtCarousel({
    index: 0,//初始索引
    auto: false,//是否自动轮播
    time: 2500,//自动轮播时间
    indicators: true,//是否显示指示按钮
    buttons: true,//是否显示左右切换按钮
});
//回到顶部
var gotop = document.getElementById("gotop");
gotop.onclick = function () {
    scrollTo(0, 0);
};

//动画循环


window.addEventListener('scroll', function(){
    var scroH = $(document).scrollTop();//滚动条滚动高度
    var lcH = $('#lc').offset().top;
    var xxbz = $('#xxbz').offset().top;
    var xxbt = $('#xxbt').offset().top;
   console.log('盒子高：'+xxbz)
    console.log('滚动条：'+scroH)
    if(scroH = lcH){
        $('.lc_img2').addClass('aniImgLc')
    }
    if(scroH = xxbz){
        $('.xx_img2').addClass('aniImgXx2');
        $('.xx_img3').addClass('aniImgXx3');
        $('.xx_img4').addClass('aniImgXx4');
        $('.xx_img5').addClass('aniImgXx5');
        $('.xx_img6').addClass('aniImgXx6');

    }
    if(scroH = xxbt){
        $('.xxbt_img2').addClass('aniImgXxbt2');
        $('.xxbt_img3').addClass('aniImgXxbt3');
        $('.xxbt_img4').addClass('aniImgXxbt4');
    }
});


// $(document).scroll(function () {
//     var titleH1 = $('#title1').offset().top;//标题距离窗口距离
//     console.log(titleH1)
//     var modeH = $('.module_cent').height;//动画容器高度
//     var scroH = $(document).scrollTop();  //滚动高度
//     console.log(titleH1);
//     console.log(modeH)
//     console.log(scroH)
//     if (scroH === 500) {
//         console.log('相等')
//        // $('.lc_img2').addClass('aniImgLc')
//
//     } else {
//         //$('.lc_img2').removeClass('aniImgLc')
//     }
//
// })
