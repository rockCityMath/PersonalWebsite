// TypeIT Functions
$('#element').typeIt({
    strings: ["Hello!.", "My name is Zachary Carpenter..."],
    speed: 80,
    breakLines: false,
    autoStart: false,
    });

setTimeout(function(){

$('#element2').typeIt({
    strings: ["Hello!.", "My name is \bZachary Carpenter..."],
    speed: 80,
    breakLines: false,
    autoStart: false,
    });


}, 4444);

// Parallax function 1 (halfWindowHeight lower)
(function() {

var start = null;
var scrollPosition = window.scrollY;
var halfWindowHeight = window.innerHeight / 1.6; //Change this to change position of paralaxed image
var rAFstarted = false;

var scrollnimates = [].slice.call(document.getElementsByClassName('scrollnimate'));
// get their offset from top of screen and their scroll speed
scrollnimates.forEach( function ( sn ) {
    var clientOffsets = sn.getBoundingClientRect();
    sn.animationOffset = clientOffsets.top + scrollPosition;
    sn.magicNumber = sn.dataset.magicNumber || sn.getAttribute("data-magic-number") || "-14";
} );

/*
   * The rAF function
  */
  function step(timestamp) {

    if (!start) start = timestamp;
    // full progress indicator
    var progress = timestamp - start;
    var scrollPoint = window.scrollY;

    scrollnimates.forEach( function ( sn ) {
      //sn.animationOffsets == main.he
      if ( scrollPoint > ( sn.animationOffset - halfWindowHeight * 2 ) && scrollPoint < ( sn.animationOffset + halfWindowHeight ) ) {
        var magicPoint = ( scrollPoint - ( sn.animationOffset - halfWindowHeight ) ) / sn.magicNumber;
        var up = magicPoint  + 'px';

        sn.style.webkitTransform = 'translateY('+up+')';
        sn.style.MozTransform = 'translateY('+up+')';
        sn.style.msTransform = 'translateY('+up+')';
        sn.style.OTransform = 'translateY('+up+')';
        sn.style.transform = 'translateY('+up+')';
      }

    } );

    window.requestAnimationFrame(step);

  }

 
  window.requestAnimationFrame(step);
  
})();


// Parallax function 2 (halfWindowHeight higher)
(function() {

  var start = null;
  var scrollPosition = window.scrollY;
  var halfWindowHeight = window.innerHeight / 10; //Change this to change position of paralaxed image
  var rAFstarted = false;
  
  var scrollnimates = [].slice.call(document.getElementsByClassName('scrollnimate2'));
  // get their offset from top of screen and their scroll speed
  scrollnimates.forEach( function ( sn ) {
      var clientOffsets = sn.getBoundingClientRect();
      sn.animationOffset = clientOffsets.top + scrollPosition;
      sn.magicNumber = sn.dataset.magicNumber || sn.getAttribute("data-magic-number") || "-14";
  } );
  
  /*
     * The rAF function
    */
    function step(timestamp) {
  
      if (!start) start = timestamp;
      // full progress indicator
      var progress = timestamp - start;
      var scrollPoint = window.scrollY;
  
      scrollnimates.forEach( function ( sn ) {
        //sn.animationOffsets == main.he
        if ( scrollPoint > ( sn.animationOffset - halfWindowHeight * 2 ) && scrollPoint < ( sn.animationOffset + halfWindowHeight ) ) {
          var magicPoint = ( scrollPoint - ( sn.animationOffset - halfWindowHeight ) ) / sn.magicNumber;
          var up = magicPoint  + 'px';
  
          sn.style.webkitTransform = 'translateY('+up+')';
          sn.style.MozTransform = 'translateY('+up+')';
          sn.style.msTransform = 'translateY('+up+')';
          sn.style.OTransform = 'translateY('+up+')';
          sn.style.transform = 'translateY('+up+')';
        }
  
      } );
  
      window.requestAnimationFrame(step);
  
    }
  
   
    window.requestAnimationFrame(step);
    
  })();