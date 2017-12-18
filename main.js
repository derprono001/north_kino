(function($) {

  var logo = $('#logo');
  var nav = $('#nav');
  var banner = $('.banner1');
  var but1 = $('.but1');
  $(document).ready(function(){
    var l = TweenLite.to(nav, 0.2, {opacity:0});
    l.reversed(true);
    $('#search').click(function(){
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

  $(document).ready(function() {
      var t = TweenLite.to(banner, 0.25, {opacity: 0.5, "z-index": 1000});
      t.reversed(true);

      but1.click(function() {
          if(t.reversed())
          {
              t.play();
          }
          else
          {
              t.reverse();
          }

      });
  });

  $(document).ready(function(){
      $("#flip1").click(function(){
          $("#panel1").slideToggle("slow");
      });
  });
  $(document).ready(function(){
      $("#flip2").click(function(){
          $("#panel2").slideToggle("slow");
      });
  });

})(jQuery);


var b=0; //count the position of image on screen in number (-2, -1, 0, 1, 2,...)
var pos=0; //position of image based on pixel
var images = document.getElementsByClassName('image'); //store all image in an array
for(var i=0; i<images.length; i++) {   //set position for each image
  images[i].style.left = i*960 + "px";
}
function right() {
  if(b <= 0 && b > (images.length - images.length*2 + 1)) { //only execute if the position of last image is 0 on screen and position of first image > (-array.length + 1)
    for(var a=0; a<images.length; a++) {  //a is the position of image in array
      images[a].style.left = (b*960 - 960) + "px";
      b++;
    }
    b = b - images.length -1; //reset b based on first image
    }
  }
function left() { //only execute if the position of first image is negative, that's mean if the position of first image on screen is 0 then cannot execute
  if(b < 0) {
    for(var a=0; a<images.length; a++) {
      images[a].style.left = (b*960 + 960) + "px";
      b++;
    }
    b = b - images.length + 1;
    }
  }
