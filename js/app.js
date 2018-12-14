var checkoutData;
jQuery.get('/api/checkouts/:checkoutId', function(data) {
  checkoutData = data;
  console.log(data);
  $("[data='product-image']").prop('src', data.product.image); // change the image for the image of the server
  loadCoupons(data.checkout.availableCoupons);
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
        "' /><span class='checkbox__checkmark' /></label></li>"
    );
  }
}
