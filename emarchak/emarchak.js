jQuery(document).ready(function($) {

  //prepare function
  function readyIcon(element, iconSide){
    iconSide = iconSide || 'left';
    var link = $(element).find('a'); // reduce the number of calls to find

    var linkWidth = link.width();
    var iconWidth = link.find('i').width();

    var linkStyle = new Array();
    linkStyle['display'] = 'block';
    linkStyle['width'] = linkWidth;
    linkStyle[iconSide] = iconWidth - linkWidth;

    link.css(linkStyle);
  }

  //animate display of text
  function viewIcon(element, iconSide){
    iconSide = iconSide || 'left';

    var fullWidth = new Array();
    fullWidth[iconSide] = 0;
    $(element).find('a').animate(fullWidth, 500);
  }

  //animate hiding of text
  function hideIcon(element, iconSide) {
    iconSide = iconSide || 'left';
    var link = $(element).find('a'); // reduce the number of calls to find

    var linkWidth = link.width();
    var iconWidth = link.find('i').width();

    var shortWidth = new Array();
    shortWidth[iconSide] = iconWidth - linkWidth;

    link.animate(shortWidth, 500);
  }

  // prepare left side icons
  $('.pages li, .pagination .next').each(function(){
    var that = this;
    readyIcon(that, 'left');
  });

  // prepare right side icons
  $('.pagination .prev').each(function(){
    var that = this;
    readyIcon(that, 'right');
  });

  // hoverIntent for left
  $('.pages li, .pagination .next').hoverIntent(
    function(){
      var that = this;
      viewIcon(that, 'left');
    },
    function(){
      var that = this;
      hideIcon(that, 'left');
    }
  );

  // hoverIntent for right
  $('.pagination .prev').hoverIntent(
    function(){
      var that = this;
      viewIcon(that, 'right');
    },
    function(){
      var that = this;
      hideIcon(that, 'right');
    }
  );
});
