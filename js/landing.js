$(document).ready(function () {
  var clicks = 0;
  $('.continueContainer').on('mousedown', function(e) {
    clearTimeout(this.downTimer);
    if(e.which == 1){
      $(".logoSVG").toggleClass('shrinkActive');
      $(".cls-1").toggleClass('shrinkActive');
      $(".continue").toggleClass('shrinkActive');
      $(".continueContainer").toggleClass('shiftActive');
      $(".figure").toggleClass('grow3');
    }
  });

  $('.continueContainer').mousedown(function(e){
    clearTimeout(this.downTimer);
    if(e.which == 1){
      this.downTimer = setTimeout(function() {
        $(".figure").toggleClass('grown3');
        $(".continueContainer").toggleClass('shiftedActive');
      }, 200);
    }
  });

  $('.continueContainer').mouseup(function(e){
    clearTimeout(this.downTimer);
  });

  $('.continueContainer').on('click', function(e) {
    if(clicks <= 0){
      e.preventDefault();
      $('.screen').toggleClass('glitch');
      $('.logo').toggleClass('is-off');
      $(".logoSVG").toggleClass('grow');
      $(".continue").toggleClass('grow2');
      $(".continueContainer").css('cursor', 'default');
      $(".figure").toggleClass('shrink');
      $(".theBody").toggleClass('lighten');
      setTimeout(function(){
        $('.cls-1').toggleClass('glitch');
        $('.cls-1').toggleClass('glitch');
        // $('.logo').toggleClass('is-off');
        $('.logo').toggleClass('logoGlitch');
        $(".screen").remove();
        $(".continueContainer").remove();
        $(".menuSection").toggleClass('revealSection');
      }, 2500);
      setTimeout(function () {
        $(".menuTitle").toggleClass('revealOpacity');
      }, 2700);
      setTimeout(function () {
        $(".menuItem1").toggleClass('revealOpacity');
      }, 2900);
      setTimeout(function () {
        $(".menuItem2").toggleClass('revealOpacity');
      }, 3100);
      setTimeout(function () {
        $(".menuItem3").toggleClass('revealOpacity');
      }, 3300);
      setTimeout(function () {
        $(".menuItem4").toggleClass('revealOpacity');
      }, 3500);
      setTimeout(function () {
        $(".menuItemDisabled").toggleClass('revealOpacity');
      }, 3700);
      clicks++;
    }
    else {
      $(".screen").remove();
      $(".continueContainer").remove();
      $(".menuSection").toggleClass('revealSection');
      setTimeout(function () {
        $(".menuTitle").toggleClass('revealOpacity');
      }, 200);
      setTimeout(function () {
        $(".menuItem1").toggleClass('revealOpacity');
      }, 400);
      setTimeout(function () {
        $(".menuItem2").toggleClass('revealOpacity');
      }, 600);
      setTimeout(function () {
        $(".menuItem3").toggleClass('revealOpacity');
      }, 800);
      setTimeout(function () {
        $(".menuItem4").toggleClass('revealOpacity');
      }, 1000);
      setTimeout(function () {
        $(".menuItemDisabled").toggleClass('revealOpacity');
      }, 1200);
    }
  });

});
