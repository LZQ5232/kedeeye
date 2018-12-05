(function (jQuery) {
    $(function () {
        //大的轮播图
        let imgIndex = 0;
        function autoPlay() {
            imgIndex++;
             if(imgIndex>=$('.slidebox > li').length){
                 imgIndex = 0;
             }
             $('.slidebox>li').eq(imgIndex).stop().animate({opacity:1}).siblings().animate({opacity:0});
             $('.dot ol li').eq(imgIndex).addClass('cur').siblings().removeClass('cur');
            //    点击小圆点显示相应图片
            $('.dot > ol > li').click(function () {
                $(this).addClass('cur').siblings().removeClass('cur');
                imgIndex =$(this).index()-1;
                autoPlay();
            })
        }
        var timer = setInterval(autoPlay,2000);
    //    鼠标移入移出
        $('.banner_wrap').hover(function () {
            clearInterval(timer);
        },function () {
            timer = setInterval(autoPlay,2000);
        })
    
        
    })

})(jQuery);