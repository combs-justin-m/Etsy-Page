
var $content = $('#content')
var contentImg, title, user, price, fullItem;

items.results.forEach( function (item){
  contentImg =  '<img class="contentImg" src="' + item.Images[0].url_570xN + '">';
  title = '<p class="title">' + item.title + '</p>';


  fullItem = '<li>'  + contentImg + title + '</li>';
  $content.append(fullItem);
});