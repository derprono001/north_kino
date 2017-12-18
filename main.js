(function($) {

  var logo = $('#logo');
  var nav = $('#nav');
  $(document).ready(function(){
    var l = TweenLite.to(nav, 0.2, {opacity:0});
    l.reversed(true);
    $('#wrap').click(function(){
      if(l.reversed())
      {
          l.play();
      }
      else
      {
          l.reverse();
      }
    });
  });

  $( "#logo" ).click(function() {
    $( this ).toggleClass( "logo2" );
  });

})(jQuery);
