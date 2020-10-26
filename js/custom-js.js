// custom js SJ

// toggle
$('.toggle-block .title').click(function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
  
  $('.toggle-btn').click(function(){
    $(this).next().slideToggle();
  });
  
  $(document).ready(function() {
    $(".main-toggleListing .title").click(function() {
      $(this).toggleClass('active');
      $(this).children("ul").slideToggle();
    });
  });

