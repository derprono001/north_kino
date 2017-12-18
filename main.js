(function($) {
  var logo = $('#logo');
  $(document).ready(function(){
    $('#logo').click(function(){
        TweenLite.to(logo, 0, {y: 50});
    });
});
})(jQuery);
