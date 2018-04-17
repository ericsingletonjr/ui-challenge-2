'use strict';

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

