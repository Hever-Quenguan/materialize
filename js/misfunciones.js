
$( document ).ready(function() {
    $(".dropdown-trigger").dropdown();
});
$(document).ready(function(){
    $('.carousel').carousel();
  });
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
  
  $(document).ready(function(){
    $('.tabs').tabs();
    $('.modal').modal();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.slider').slider();
  });

        