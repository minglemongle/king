jQuery(document).ready(function(){

     $('.sidemenu>li').click(function(){
        $(this).find('.sidesubmenu').stop().slideToggle(500);
        $(this).toggleClass('active');
    });
    
    
    $('.nav_btn').click(function(){
        $('.sidebar').animate({right:0});
        $('.bg').addClass('on');
    });
    
    $('.close_btn').click(function(){
        $('.sidebar').animate({right:'-100%'});
        $('.bg').removeClass('on');
    });
    
    
    $(".menu>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
        $('.menubg').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
        $('.menubg').stop().slideUp(500);
    });
    
    $(window).scroll(function(){
        var height = $(document).scrollTop();
        if(height>=400){
        $("#header").addClass("sc");
    }else{
        $("#header").removeClass("sc");
    }      
    });
});
	