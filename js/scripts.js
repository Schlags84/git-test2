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
    $(".modal, .reserveModal").addClass("active");
    });
    $(".reserveButton").on("click", function(){
        $(".modal, .reserveModal").removeClass("active");
        });