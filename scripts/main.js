// Content - API appender //
var $content = $('#content')
var contentImg, title, user, price, fullItem, social;

function populate(tax) { items.results.forEach(function (item){
  titleLink = item.url;
  contentImg =  '<a href="' + titleLink + '">' + '<img id="contentImg" src="' + item.Images[0].url_170x135 + '">' + '</a>';
  title = '<a href="' + titleLink + '">' + '<p id="title">' + item.title + '</p>' + '</a>';
  shopLink = item.Shop.url;
  user = '<a href="' + shopLink + '">' + '<p id="user">' + item.Shop.shop_name + '</p>' + '</a>';
  price = '<p id="price">' + '$' + item.price + ' ' + item.currency_code + '</p>';
  social = '<div class="socialRow">' + '<button class="socialBtn">' + '<div class="socialFav">' + '</div>' + '</button>' + '<button class="socialBtn">' + '<div class="socialHam">' + '</div>' + '</button>' + '</div>';

  fullItem = '<li>'  + contentImg + title + user + price + social + '</li>';

  $content.append(fullItem);
  });
}

populate();

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

