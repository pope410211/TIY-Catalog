

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

$.getJSON('../../api/etsy/shop.json')
.then(function(shopList){
  console.log()

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
