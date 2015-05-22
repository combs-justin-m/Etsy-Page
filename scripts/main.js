// Content - API appender //
var $content = $('#content')
var contentImg, title, user, price, fullItem;

items.results.forEach( function (item){
  contentImg =  '<img id="contentImg" src="' + item.Images[0].url_170x135 + '">';
  title = '<p id="title">' + item.title + '</p>';
  user = '<p id="user">' + item.Shop.shop_name + '</p>';
  price = '<p id="price">' + '$' + item.price + ' ' + item.currency_code + '</p>';

  fullItem = '<li>'  + contentImg + title + user + price + '</li>';
  $content.append(fullItem);
});

// Search param and results counter //

var searchTerm = items.params.keywords;
var resultsNum = items.count;

$('#resultsLine').append('"' + '<b>' + searchTerm + '</b>' + '"' + ' ' + '(' + resultsNum + ' Results)');

// aside active assigner //

$('dt').on('click', function (){
  $('dt').removeClass('active');
  $(this).addClass('active');
  $('#resultsCat').html($(this).html()); // category updater
});



