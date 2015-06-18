

$.getJSON('../../api/etsy/total-listing.json')
.then(function(totalList){
  console.log(totalList);
  console.log('its a live');

  $storeTitle = $('#storename');
  $storeTitle.text(totalList.results[0].Shop.shop_name);

  $storePic = $('a', 'img#storepic');
  $storePic.attr('src', totalList.results[0].Images.url_75x75);

});
