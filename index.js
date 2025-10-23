// hide or show Nav Bar
var div = document.getElementById("nav");
var display = 1;
function hideShow() {
    if (display == 1) {
        $("#nav").hide(100);
        display = 0;}
    else if(display == 0) {
        $("#nav").show(500);
        display = 1;
    }
}
 //Toggle products visibility
$(document).ready(function(){
    $("#toggleButton").click(function(){
        $(".product-item, .product-item2").toggle();
    });
});
//Fade in product descriptions on hover
$(document).ready(function(){
    $(".product-item").hover(function(){
        $(this).find(".product-description").fadeIn();
    }, function(){
        $(this).find(".product-description").fadeOut();
    });
});

$(document).ready(function(){
    $(".product-item2").hover(function(){
        $(this).find(".product-description").fadeIn();
    }, function(){
        $(this).find(".product-description").fadeOut();
    });
});
//Slide toggle for FAQ section
$(document).ready(function(){
    $(".faq-item1").click(function(){
        $(".answer1").slideToggle();
    });
});

$(document).ready(function(){
    $(".faq-item2").click(function(){
        $(".answer2").slideToggle();
    });
});

$(document).ready(function(){
    $(".faq-item3").click(function(){
        $(".answer3").slideToggle();
    });
});

//swing footer text and increase font size
$(".footer").click(function(){
    $(".names").animate({fontSize:"20px"},1000, "swing", $(".names").animate({fontSize:"80px"},1000));
});
