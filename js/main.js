$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".macbook").css({
        "transform" : "translate(0px, " + st/25 + "px"
    });
    $(".sheet1").css({
        "transform" : "translate(0px, -" + st/15 + "px) rotate(-6deg)"
    });
    $(".sheet2").css({
        "transform" : "translate(0px, -" + st/17 + "px) rotate(45deg)"
    });
    $(".sheet3").css({
        "transform" : "translate(0px, -" + st/25 + "px) rotate(-6deg)"
    });
    $(".sheet4").css({
        "transform" : "translate(0px, -" + st/25 + "px)"
    });
    $(".sheet5").css({
        "transform" : "translate(0px, -" + st/25 + "px) rotate(45deg)"
    });
    $(".sheet6").css({
        "transform" : "translate(0px, -" + st/20 + "px) rotate(-10deg)"
    });
    $(".sheet7").css({
        "transform" : "translate(0px, -" + st/25 + "px) rotate(50deg)"
    });
    $(".sheet8").css({
        "transform" : "translate(0px, -" + st/20 + "px) rotate(-43deg)"
    });
    $(".sheet9").css({
        "transform" : "translate(0px, -" + st/20 + "px) rotate(-15deg)"
    });
    $(".sheet10").css({
        "transform" : "translate(0px, -" + st/25 + "px) rotate(45deg)"
    });
    $(".sheet11").css({
        "transform" : "translate(0px, -" + st/25 + "px) rotate(45deg)"
    });
    $(".sheet12").css({
        "transform" : "translate(0px, -" + st/25 + "px) rotate(-15deg)"
    });
    $(".sheet13").css({
        "transform" : "translate(0px, -" + st/25 + "px) rotate(30deg)"
    });
    $(".sheet14").css({
        "transform" : "translate(0px, -" + st/20 + "px) rotate(80deg)"
    });
    $(".sheet15").css({
        "transform" : "translate(0px, -" + st/25 + "px) rotate(-45deg)"
    });
    $(".sheet16").css({
        "transform" : "translate(0px, -" + st/25 + "px) rotate(8deg)"
    });
    $(".sheet17").css({
        "transform" : "translate(0px, -" + st/25 + "px) rotate(45deg)"
    });
});