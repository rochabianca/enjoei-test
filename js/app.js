var checkoutData;
jQuery.get('/api/checkouts/:checkoutId', function(data) {
  checkoutData = data;
  console.log(data);
  $("[data='product-image']").prop('src', data.product.image); // change the image for the image of the server
  loadCoupons(data.checkout.availableCoupons);
  loadResume(data.product, data.checkout);
  getTotal();
});

function loadCoupons(coupons) {
  for (var i = 0; i < coupons.length; i++) {
    $("[data='coupons-list']").append(
      "<li><label class='checkbox__container'><div class='coupon'><span>" +
        coupons[i].title +
        "</span><span class='coupon__discount'>" +
        '- R$ ' +
        coupons[i].discount.toFixed(2) +
        "</span></div><input type='radio' name='radio' value='" +
        coupons[i].id +
        "' /><span class='checkbox__checkmark' ></span></label></li>"
    );
  }
}

function loadResume(product, checkout) {
  $("[data='product-value']").text('R$ ' + product.price.toFixed(2));
  $("[data='shippment-value']").text('R$ ' + checkout.shippingPrice.toFixed(2));
}
function getTotal() {
  var initialValue = getCurrency($("[data='product-value']").text());
  var couponValue = getCurrency($("[data='coupon-value']").text());
  var shippmentValue = getCurrency($("[data='shippment-value']").text());
  var totalValue = initialValue + shippmentValue - couponValue;
  $("[data='total-value']").text('R$ ' + totalValue);
}

function getCurrency(currency) {
  return Number(currency.replace(/[^0-9.-]+/g, ''));
}
