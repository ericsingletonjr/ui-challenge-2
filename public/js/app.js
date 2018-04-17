'use strict';

$(document).ready(function() {

  $('.text-input').css({
    'width': '300px',
    'height': '30px'
  });
  $('#select-box').css({
    'width': '300px',
    'height': '50px',
    'color': 'black'
  });
  $('#select-box option:nth-child(odd)').css('background-color', 'grey');
  $('#select-box option:nth-child(even)').css('background-color', 'lightgrey');

});

$('.text-input').on('focusout', () =>{
  if(!$('.text-input').val()) $('.text-input').siblings().removeClass('isHidden');
});

$('#select-box').on('click', (e) =>{

  if($(e.target).siblings().hasClass('closed')) {
    $(e.target).siblings().removeClass('closed');
    $('#placeholder').addClass('not-visible');
  }
  else {
    $(e.target).siblings('.select-arrow').addClass('closed');
    $('#placeholder').removeClass('not-visible');
  }

});

$('div.check-sprite').on('click', (e) =>{
  if($(e.target).parent().hasClass('checked')) $(e.target).parent().toggleClass('checked');
  else $(e.target).parent().toggleClass('checked');
});

$('div.radio-sprite').on('click', (e) =>{
  if(!$(e.target).parent().hasClass('r-checked')) {
    $(e.target).parent().toggleClass('r-checked');
    $(e.target).parent().siblings('.radio-sprite').removeClass('r-checked');
  }
});

