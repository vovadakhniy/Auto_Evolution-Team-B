$(document).ready(function(){
 $('.show-more').click(function(){
  $(this).parent().children('div.show-more').toggle(slow);
  return false;
 });
});