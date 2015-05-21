
var $content = $('#content')
var contentImg, title, user, price, fullItem;

items.results.forEach( function (item){
  contentImg =  '<img class="contentImg" src="' + item.Images[0].url_170x135 + '">';
  title = '<p class="title">' + item.title + '</p>';
  user = '<p class="user">' + item.Shop.shop_name + '</p>';
  price = '<p class="price">' + '$' + item.price + ' ' + item.currency_code + '</p>';

  fullItem = '<li>'  + contentImg + title + user + price + '</li>';
  $content.append(fullItem);
});