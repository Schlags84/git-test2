$( document).ready(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselPause").click(function(){
        $(".carousel").carousel("pause");
    });
    $("#carouselPlay").click(function(){
        $(".carousel").carousel("cycle");
    });
});

$(".reserveButton").on("click", function(){
    $(".popup, .reserveModal").addClass("active");
    });
    $(".reserveButton").on("click", function(){
        $(".popup, .reserveModal").removeClass("active");
        });