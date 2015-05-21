
var $content = $('#content')
var contentImg, description, user, price, fullItem;

items.results.forEach( function (item){
  contentImg =  '<img class="contentImg" src="' + item.Images[0].url_570xN + '">';

  fullItem = '<li>' +  contentImg + '</li>';
  $content.append(fullItem);
});