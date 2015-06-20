  (function(window){

  //CATEGORY PAGE JAVASCRIPT
  var $pages = $('.pagination a');
  $pages.click(function() {
    $pages.removeClass('active');
    $(this).addClass('active');
  });

  //END CATEGORY PAGE JAVASCRIPT

  $.getJSON('../../api/etsy/listing-all.json')
  .then(function(totalList){
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

  $.getJSON('../../api/etsy/countries.json')
  .then(function(countries){

    $c1=$('#c1');
    $c1.val(_.result(_.find(countries.results, { 'slug': 'australia'}), 'country_id'));
    $c1.text(_.result(_.find(countries.results, { 'slug': 'australia'}), 'name'));

    $c2=$('#c2');
    $c2.val(_.result(_.find(countries.results, { 'slug': 'canada'}), 'country_id'));
    $c2.text(_.result(_.find(countries.results, { 'slug': 'canada'}), 'name'));

    $c3=$('#c3');
    $c3.val(_.result(_.find(countries.results, { 'slug': 'france'}), 'country_id'));
    $c3.text(_.result(_.find(countries.results, { 'slug': 'france'}), 'name'));

    $c4=$('#c4');
    $c4.val(_.result(_.find(countries.results, { 'slug': 'germany'}), 'country_id'));
    $c4.text(_.result(_.find(countries.results, { 'slug': 'germany'}), 'name'));

    $c5=$('#c5');
    $c5.val(_.result(_.find(countries.results, { 'slug': 'greece'}), 'country_id'));
    $c5.text(_.result(_.find(countries.results, { 'slug': 'greece'}), 'name'));

    $c6=$('#c6');
    $c6.val(_.result(_.find(countries.results, { 'slug': 'ireland'}), 'country_id'));
    $c6.text(_.result(_.find(countries.results, { 'slug': 'ireland'}), 'name'));

    $c7=$('#c7');
    $c7.val(_.result(_.find(countries.results, { 'slug': 'italy'}), 'country_id'));
    $c7.text(_.result(_.find(countries.results, { 'slug': 'italy'}), 'name'));

    $c8=$('#c8');
    $c8.val(_.result(_.find(countries.results, { 'slug': 'japan'}), 'country_id'));
    $c8.text(_.result(_.find(countries.results, { 'slug': 'japan'}), 'name'));

    $c9=$('#c9');
    $c9.val(_.result(_.find(countries.results, { 'slug': 'new-zealand'}), 'country_id'));
    $c9.text(_.result(_.find(countries.results, { 'slug': 'new-zealand'}), 'name'));

    $c10=$('#c10');
    $c10.val(_.result(_.find(countries.results, { 'slug': 'portugal'}), 'country_id'));
    $c10.text(_.result(_.find(countries.results, { 'slug': 'portugal'}), 'name'));

    $c11=$('#c11');
    $c11.val(_.result(_.find(countries.results, { 'slug': 'russia'}), 'country_id'));
    $c11.text(_.result(_.find(countries.results, { 'slug': 'russia'}), 'name'));

    $c12=$('#c12');
    $c12.val(_.result(_.find(countries.results, { 'slug': 'spain'}), 'country_id'));
    $c12.text(_.result(_.find(countries.results, { 'slug': 'spain'}), 'name'));

    $c13=$('#c13');
    $c13.val(_.result(_.find(countries.results, { 'slug': 'the-netherlands'}), 'country_id'));
    $c13.text(_.result(_.find(countries.results, { 'slug': 'the-netherlands'}), 'name'));

    $c14=$('#c14');
    $c14.val(_.result(_.find(countries.results, { 'slug': 'united-kingdom'}), 'country_id'));
    $c14.text(_.result(_.find(countries.results, { 'slug': 'united-kingdom'}), 'name'));

    $c15=$('#c15');
    $c15.val(_.result(_.find(countries.results, { 'slug': 'united-states'}), 'country_id'));
    $c15.text(_.result(_.find(countries.results, { 'slug': 'united-states'}), 'name'));

    var countries = new Vue({
      el: '#fullList',
      data: {
        title: 'countries',
        countries: countries.results
      }
    });
  });
});

  $('li', '.tab-row').click(function(event){
      event.preventDefault();
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $($('a', this).attr('href')).addClass('panel-current');
      $($('a', this).attr('href')).siblings().removeClass('panel-current');
    });




})(window);


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
