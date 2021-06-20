// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .



$(function(){
  $('#btn1').on('click',function(){
    $('.box1').slideDown();
  });

  $('#btn2').on('click',function(){
    $('.box1').slideUp();
    });
});

$(function(){
  $('#btn1').on('click',function(){
    $('.box1').slideDown();
  });

$(function(){
  $('#btn3').mouseover(function(){
    $('.box2').slideDown(1000);
  });
});
$(function(){
  $('#btn4').mouseover(function(){
    $('.box2').slideUp(1000);
  });
});









$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});

