jQuery.get('/api/checkouts/:checkoutId', function(data) {
  console.log(data);
  $("[data='product-image']").prop('src', data.product.image); // change the image for the image of the server
  loadCoupons(data.checkout.availableCoupons);
  loadResume(data.product, data.checkout);
  getTotal();
});

jQuery(document).ready(function() {
  jQuery("[data='coupon']").click(function() {
    selectCoupon(this);
  });

  jQuery("[data='unselect-coupon']").click(function() {
    unselectCoupon();
  });
});

function selectCoupon(context) {
  var discount = $(context).find("[data='coupon-discount']");
  $("[data='coupon-value']").text(discount.text());
  $("[data='selected-coupon']").show();
  getTotal();
}
function unselectCoupon() {
  $("[data='coupon-value']").text('R$ 00.00');
  $("[data='selected-coupon']").hide();
  getTotal();
}
function loadCoupons(coupons) {
  for (var i = 0; i < coupons.length; i++) {
    $("[data='coupons-list']").append(
      "<li><label data='coupon' class='checkbox__container'><div class='coupon'><span>" +
        coupons[i].title +
        "</span><span data='coupon-discount' class='coupon__discount'>" +
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
  var totalValue = initialValue + shippmentValue + couponValue;
  $("[data='total-value']").text('R$ ' + totalValue);
}

function getCurrency(currency) {
  return Number(currency.replace(/[^0-9.-]+/g, ''));
}
