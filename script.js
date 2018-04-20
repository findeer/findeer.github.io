$(document).ready(function() {
    $('.menu').on('click', function() {
        $('.menu-item').toggleClass('display');
        $('.menu').toggleClass('underline');
    })
    
    $( ".home" ).hover(
      function() {
        $( this ).append( $( "<span>  →</span>" ) );
      }, function() {
        $( this ).find( "span:last" ).remove();
      }
    );
    $( ".info" ).hover(
      function() {
        $( this ).append( $( "<span>  →</span>" ) );
      }, function() {
        $( this ).find( "span:last" ).remove();
      }
    );
    $( ".tests" ).hover(
      function() {
        $( this ).append( $( "<span>  →</span>" ) );
      }, function() {
        $( this ).find( "span:last" ).remove();
      }
    );
})