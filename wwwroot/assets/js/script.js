(function($,sr){
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

var $ = jQuery;


(function(){


  ///////////////////////////////
  // Set Home Slideshow Height
  ///////////////////////////////

  function setHomeBannerHeight() {
    var windowHeight = jQuery(window).height(); 
    jQuery('#header').height(windowHeight);
  }

  ///////////////////////////////
  // Center Home Slideshow Text
  ///////////////////////////////

  function centerHomeBannerText() {
      var bannerText = jQuery('#header > .center');
      var bannerTextTop = (jQuery('#header').actual('height')/2) - (jQuery('#header > .center').actual('height')/2) - 40;   
      bannerText.css('padding-top', bannerTextTop+'px');    
      bannerText.show();
  }

  function setHeaderBackground() {    
    var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top 
    
    if (scrollTop > 300 || jQuery(window).width() < 700) { 
      jQuery('#header .top').addClass('solid');
    } else {
      jQuery('#header .top').removeClass('solid');    
    }
  }




  ///////////////////////////////
  // Initialize
  ///////////////////////////////

  jQuery.noConflict();
  setHomeBannerHeight();
  centerHomeBannerText();

  //Resize events
  jQuery(window).smartresize(function(){
    setHomeBannerHeight();
    centerHomeBannerText();
  });
  
})();


  ///////////////////////////////
  // Smooth Scroll
  ///////////////////////////////


smoothScroll.init();




  ///////////////////////////////
  // Animate Css
  ///////////////////////////////
var $ = jQuery;

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}

$(document).ready(function(){
    $('#scrollToContent').each(function() {
        animationHover(this, 'pulse');
    });
});



  ///////////////////////////////
  // Header Fixed
  ///////////////////////////////



var menu = $('#navigation');
var origOffsetY = menu.offset().top;

function scroll() {
   if ($(window).scrollTop() >= origOffsetY) {
       $('#navigation').addClass('nav-wrap');
       $('#services').addClass('exp');
       //$('.content').addClass('menu-padding');
   } else {
       $('#navigation').removeClass('nav-wrap');
       $('#services').removeClass('exp');
       //$('.content').removeClass('menu-padding');
   }



}

 document.onscroll = scroll;


  ///////////////////////////////
  // Testimonial Slide
  ///////////////////////////////

 $(document).ready(function() {
 
  $("#testimonial-container").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 700,
      paginationSpeed : 400,
      singleItem:true,
  });
 
});


  ///////////////////////////////
  // google map
  ///////////////////////////////

function initialize()
{
var mapProp = {
    center: new google.maps.LatLng(33.749607, -117.937556),
  zoom:11,
  //mapTypeId:google.maps.MapTypeId.ROADMAP,
  //disableDefaultUI: true,
  //scrollwheel: false
  };
var map=new google.maps.Map(document.getElementById("googleMap")
  ,mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);


//CUSTOM CODE
function clock() {

    //Save the times in variables

    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();


    //Set the AM or PM time

    if (hours >= 12) {
        meridiem = " PM";
    }
    else {
        meridiem = " AM";
    }


    //convert hours to 12 hour format and put 0 in front
    if (hours > 12) {
        hours = hours - 12;
    }
    else if (hours === 0) {
        hours = 12;
    }

    //Put 0 in front of single digit minutes and seconds

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    else {
        minutes = minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    else {
        seconds = seconds;
    }


    document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds + meridiem);

}
setInterval('clock()', 1000);

$(document).ready(function () {
    clock();
    const date = new Date();
});

