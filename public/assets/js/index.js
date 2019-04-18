let title = {
    "home": "EFFICIENCY &<br /> PROFITABILITY, SUPERCHARGED",
    "solution": "5 REASONS TO TRY CONNECTED LOT MANAGEMENT",
    "roi": "ROI CALACULATION FOR CONNECTED LOT MANAGEMENT"
};

$(".module2").hover(function () {
    $(this).find(".content-tip div").slideDown(500);
    $(this).find(".black-tip").show();
    window.innerWidth < 700 ? $(this).find(".arrow").hide() : "";
},function () {
    $(this).find(".black-tip").hide();
    window.innerWidth < 700 ? $(this).find(".arrow").show() : "";
    $(this).find(".content-tip div").slideUp(500)
});

$("ul li").click(function () {
    $(".nav li").removeClass("active");
    $(this).addClass("active")
})


$(".navbar ul li a").click(function () {
    if (window.innerWidth < 800){
        $(".navbar button").trigger("click")
    }
});

$(".navbar-toggle").click(function () {
    $(".nav-tip").show();
});

$(".nav-tip").click(function () {
    $(".navbar button").trigger("click");
    $(this).hide();
});


$(function () {
    if (window.innerWidth < 800) {
        $("#roi_img").attr("src", "/assets/images/roi1_m.svg")
    }
    window.onscroll = function () {
        $.each($(".main-content>div"), function (index, i) {
            if ($(i).offset().top >= $(window).scrollTop() && $(i).offset().top + 200 < ($(window).scrollTop() + $(window).height() )) {
                let temp = $(i).attr("id");
                $(".zus-title").html(title[temp])
                $(".navbar-nav li").removeClass("active");
                $(".navbar-nav ." + temp).parent().addClass("active")
            }
        });
    }
});