$(".collec li a").click(function(){
    $(this).parent().addClass("on").siblings().removeClass("on")
});

$("#fade ul li").hide();
$("#fade ul li:first-child").show();
setInterval(function(){
    $("#fade ul li:first-child").fadeOut(2000).next().fadeIn(2000).end().appendTo("#fade ul")
    // .end 메서드는 재 선택된 요소의 이전 요소를 선택하는 매서드 입니다.
    // .appendTop() 매서드는 선택한 요소를 다른 요소 안에 넣습니다.

    //재 선택된 요소를 .appendTo()의 소괄호 안에 넣는다.
},2000);


$(function(){
    $("#button1").click(function(){

            $(".img1").fadeIn().siblings().fadeOut();
    });	
    $("#button2").click(function(){

            $(".img2").fadeIn().siblings().fadeOut();
    });	
    $("#button3").click(function(){

            $(".img3").fadeIn().siblings().fadeOut();
    });	

});
$(function(){
    $("#button4").click(function(){

            $(".img4").fadeIn().siblings().fadeOut();
    });	
    $("#button5").click(function(){

            $(".img5").fadeIn().siblings().fadeOut();
    });	
    $("#button6").click(function(){

            $(".img6").fadeIn().siblings().fadeOut();
    });	

});
$(function(){
    $("#button7").click(function(){

            $(".img7").fadeIn().siblings().fadeOut();
    });	
    $("#button8").click(function(){

            $(".img8").fadeIn().siblings().fadeOut();
    });	
    $("#button9").click(function(){

            $(".img9").fadeIn().siblings().fadeOut();
    });	

});


$('.f_button1').mouseenter(function(){
    $('.list_1').stop().slideDown();
})   
$('.f_button1').mouseleave(function(){
    $('.list_1').stop().slideUp();
})  
$('.f_button2').mouseenter(function(){
    $('.list_2').stop().slideDown();
})   
$('.f_button2').mouseleave(function(){
    $('.list_2').stop().slideUp();
})  
$('.f_button3').mouseenter(function(){
    $('.list_3').stop().slideDown();
})   
$('.f_button3').mouseleave(function(){
    $('.list_3').stop().slideUp();
})  

$('.btn1').click(function(){
    $('body,html').animate({
        scrollTop: 5700
    },500)
});
$('.btn2').click(function(){
    $('body,html').animate({
        scrollTop: 8000
    },500)
});
$('.btn3').click(function(){
    $('body,html').animate({
        scrollTop: 3200
    },1000)
});


$('.btn_oil').click(function () {
    $('body,html').animate({
        scrollTop: 900
    }, 500)
});
$('.btn_shampoo').click(function () {
    $('body,html').animate({
        scrollTop: 4100
    }, 500)
});
$('.btn_soap').click(function () {
    $('body,html').animate({
        scrollTop: 6000
    }, 1000)
});



$('.perfume_sub1').click(function () {
    $('body,html').animate({
        scrollTop: 5000
    }, 500)
});