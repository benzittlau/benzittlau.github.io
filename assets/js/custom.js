$(document).ready(function () {
    "use strict";
    var html_body = $("html,body")
        , btn_top = $(".btn_top")
        , menu_left = $('.menu ul li')
        , menu_theme = $(".theme ul li");
    // Page Loader
    $(window).on("load", function () {
        $("#preloader").fadeOut(500);
    });
    // Start btn scroll to top
    if ($(window).scrollTop() > 200) {
        btn_top.fadeIn();
    }
    else {
        btn_top.fadeOut();
    };
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 200) {
            btn_top.fadeIn();
        }
        else {
            btn_top.fadeOut();
        };
    });
    btn_top.on("click", function () {
        html_body.animate({
            scrollTop: 0
        }, 1500);
    });
    // SideBar Left Switch Style Color
    menu_theme.on("click", function () {
        var theme_color = $(this).data("color");
        $("link[href*='theme.css']").attr("href", "css/themes/" + theme_color);
    });
    // Menu SideBar Left Move To Section On click
    menu_left.on("click", function (e) {
        e.preventDefault();
        var section_id = $(this).data("section");
        $(this).parent().addClass("actived").siblings().removeClass("actived");
        html_body.animate({
            scrollTop: $(section_id).offset().top
        }, 1500)
    });
    // SideBar Left Add Acitved Section Class
    $(window).on("scroll", function () {
        menu_left.each(function () {
            var sec = $(this).data("section");
            var offset = $(sec).offset().top - 100;
            if ($(window).scrollTop() >= offset) {
                $(this).addClass("actived").siblings().removeClass("actived")
            }
        });
    });
    // Move To Portfolio On Click
    $(".see_works").on("click", function () {
        html_body.animate({
            scrollTop: $("#portfolio").offset().top
        }, 1500)
    });
    // Button Sliding SideBar Left Block
    $(".collaps").on("click", function () {
        $(".sidebar_left").toggleClass("slide");
    });
    // Skills bar state animate
    // 1 - ##### window on refresh #####
    var progress_bar = $(".progress-bar")
        , skills_top = $("#skills").offset().top - 200
        , window_top = $(window).scrollTop();
    if (window_top >= skills_top) {
        progress_bar.each(function () {
            var data_percent = $(this).attr("data-percent");
            $(this).css("width", data_percent)
        });
    };
    // 2 - ##### window on scroll #####
    $(window).on("scroll", function () {
        var skills_top = $("#skills").offset().top - 200
            , window_top = $(window).scrollTop();
        if (window_top >= skills_top) {
            progress_bar.each(function () {
                var data_percent = $(this).attr("data-percent");
                $(this).css("width", data_percent)
            });
        };
    });
    // Add Check Icon For Active Theme
    menu_theme.on("click", function () {
        $(this).addClass("check").siblings().removeClass("check");
    });
    //Initialize filterizr with default options And Add Class for Active Select
    $(".filter_work li").on('click', function () {
        $(this).addClass('active_filter').siblings().removeClass("active_filter");
    });
    $(".filtr-container").filterizr();
});