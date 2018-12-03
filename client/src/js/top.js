$(function () {
  //顶部的一入一出下拉菜单的显示与隐藏
    
    $('.menu_tab_bzzx').mouseenter(function () {
        $(this).find('.sub-item').stop().slideDown(200);
    }).mouseleave(function () {
        $(this).find('.sub-item').stop().slideUp(200);
    })

    $('.menu_tab_phone').mouseenter(function () {
        $(this).find('.menu_tab_phone_img').stop().slideDown(200);
    }).mouseleave(function () {
        $(this).find('.menu_tab_phone_img').stop().slideUp(200);
    })
    
    
//    创建四位随机数  
    
    function RandomCode() {
        var str ="qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
        var result = "";

        for(var i = 0; i < 4; i++) {
            var ran = Math.floor(Math.random()*62),
                char = str[ran];
            if(result.toLowerCase().indexOf(char.toLowerCase())>-1){
                i--;
                continue;
            }
            result += char;
        }
        return result;
    }

    $('.code span').html(RandomCode()).css({
        fontSize:20
    });
    $('#btnGetRegistVerifyCode').click(function () {
        $(this).html(RandomCode());})
})