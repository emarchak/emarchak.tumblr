$(function() {

   function ready_left(){
    var link_width = $(this).find('a').width();
    var icon_width = $(this).find('i').width();
    $(this).find('a').css({
      'display' : 'block',
      'left'    : icon_width-link_width,
      'width'   : link_width,
    });
  };

  $('.pages li').each(ready_left);
//  $('.pagination li.next').each(ready_left);
//  $('.pagination li.prev').each(ready_right);

  $('.pages li').hover(
    function(){
      $(this).find('a').animate({
        left : 0
      });
    },
    function(){
      var link_width = $(this).find('a').width();
      var icon_width = $(this).find('i').width();
      $(this).find('a').animate({
        left : icon_width-link_width
      });
    }
  );
});
