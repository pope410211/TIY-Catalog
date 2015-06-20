//CATEGORY PAGE JAVASCRIPT
var $pages = $('.pagination a');
$pages.click(function() {
  $pages.removeClass('active');
  $(this).addClass('active');
});

//END CATEGORY PAGE JAVASCRIPT

$.getJSON('../../api/etsy/listing-all.json')
.then(function(totalList){
  console.log(totalList);
  console.log('its a live');

  // $storeTitle = $('#storename');
  // $storeTitle.text(totalList.results[0].Shop.shop_name);

  $storePic = $('a', 'img#storepic');
  $storePic.attr('src', totalList.results[0].Images.url_75x75);

  $productTitle = $('#productinfo');
  $productTitle.text(totalList.results[0].title)

  $productCost = $('#cost');
  $productCost.text(totalList.results[0].price)

  $productCurrency = $('#money');
  $productCurrency.text(totalList.results[0].currency_code)

});

$.getJSON('../../api/etsy/shopss.json')
.then(function(shop){

  $storeTitle = $('#storename');
  $storeTitle.text(shop.results[0].shop_name);

  $storePic = $('#storepic');
  $storePic.attr('src', shop.results[3].image_url_75x75);

  $itemCount = $('.item-count');
  $itemCount.text(shop.results[0].listing_active_count);

});

$.getJSON('../../api/etsy/listing-all.json')
.then(function(shopItems){

  $storeItem = $('#itempic1');
  $storeItem.attr('src', shopItems.results[0].Images[0].url_75x75);

  $storeItem = $('#itempic2');
  $storeItem.attr('src', shopItems.results[0].Images[1].url_75x75);

  $storeItem = $('#itempic3');
  $storeItem.attr('src', shopItems.results[0].Images[2].url_75x75);

  $storeItem = $('#itempic4');
  $storeItem.attr('src', shopItems.results[0].Images[3].url_75x75);

});


// new Vue ({
//
//   el: ".overview-bullets",
//
//   data: [
//
//     baseInfo: {body:
//
//     }
//
//   ],
//
//   components: {
//     require '../../api/etsy/listing-variations'
//   }
//
//   methods: {
//
//     },
//
//   },
//
//
//
// });
