jQuery(document).ready(function($){
  var items = $('li');
  items.addClass('nohighlight');

  setInterval(function() {
    var items = $('li');
    items.addClass('nohighlight');
    var randomItem = items.eq(Math.floor(Math.random() * items.length));
    randomItem.removeClass('nohighlight');
  }, 2000);
});