// Content - API appender //
var $content = $('#content')
var contentImg, title, user, price, fullItem, social;

function populate(itemlist) {
  itemlist.forEach(function (item){
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
   // Search param and results counter //

    var searchTerm = items.params.keywords;
    var resultsNum = itemlist.length;
    $('#resultsLine').html('"' + '<b>' + searchTerm + '</b>' + '"' + ' ' + '(' + resultsNum + ' Results)');
}

populate(items.results);



// aside active assigner //

$('dt').on('click', function (){

  $('dt').removeClass('active');
  $(this).addClass('active');
  var tax = $(this).data('taxonomy');

  var taxlist;
  if (tax) {
    taxlist = items.results.filter(function (item){
      return item.taxonomy_path[0] === tax;
    });
  } else {
    taxlist = items.results;
  }

// Taxonomy updater //

  $content.empty();
  populate(taxlist);
  $('#resultsCat').html($(this).html());
});

