var div = document.getElementById("nav");
var display = 0;

function hideShow() {
    if (display == 1) {
        div.style.display = "block";
        display = 0;
    } else {
        div.style.display = "none";
        display = 1;
    }
}
$(document).ready(function(){
    $("#toggleButton").click(function(){
        $(".product-item, .product-item2").toggle();
    });
});

$(document).ready(function(){
    $("#product-gallery").hover(function(){
        $(this).find(".product-description").fadeIn();
    }, function(){
        $(this).find(".product-description").fadeOut();
    });
});