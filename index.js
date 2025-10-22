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
 
$(document).ready(function(){
    $("#toggleButton").click(function(){
        $(".product-item, .product-item2").toggle();
    });
});

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
