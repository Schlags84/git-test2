$( document).ready(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselPause").click(function(){
        $(".carousel").carousel("pause");
    });
    $("#carouselPlay").click(function(){
        $(".carousel").carousel("cycle");
    });
});

$(document).ready(function(){
    var show_btn=$('.show-modal');
    var show_btn=$('.show-modal');
    //$("#testmodal").modal('show');
    
      show_btn.click(function(){
        $("#reserveModal").modal('show');
    })
  });
  
  $(function() {
          $('#reserveButton').on('click', function( e ) {
              Custombox.open({
                  target: '#reserveModal-1',
                  effect: 'fadein'
              });
              e.preventDefault();
          });
      });

      $(document).ready(function(){
        var show_btn=$('.show-modal-2');
        var show_btn=$('.show-modal-2');
        //$("#testmodal").modal('show');
        
          show_btn.click(function(){
            $("#loginModal").modal('show');
        })
      });
      
      $(function() {
              $('#loginButton').on('click', function( e ) {
                  Custombox.open({
                      target: '#reserveloginModal-1',
                      effect: 'fadein'
                  });
                  e.preventDefault();
              });
          });