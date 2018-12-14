function loadCoupons(coupons) {
  for (var i = 0; i < coupons.length; i++) {
    $("[data='coupons-list']").append(
      "<label data='coupon' class='checkbox__container'><div class='coupon'><span>" +
        coupons[i].title +
        "</span><span data='coupon-discont' class='coupon__discount'>" +
        "- R$ " +
        coupons[i].discount.toFixed(2) +
        "</span></div><input data='coupon-id' type='radio' name='radio' value='" +
        coupons[i].id +
        "' /><span class='checkbox__checkmark' ></span></label>"
    );
  }
}

function selectCoupon(context) {
  showCoupon(context);
  var couponId = $(context)
    .find("[data='coupon-id']")
    .val();
  baseUrl = baseUrl + "?couponId=" + couponId;
  jQuery.get(baseUrl, function(data) {
    getTotal(data.checkout);
  });
}

function showCoupon(context) {
  var couponValue = $(context)
    .find("[data='coupon-discont']")
    .text();
  $("[data='coupon-value']").text(couponValue);
  $("[data='selected-coupon']").show();
}

function hideCoupon() {
  $("[data='coupon-value']").text("R$ 00.00");
  $("[data='selected-coupon']").hide();
  baseUrl = "/api/checkouts/" + getID();
  jQuery.get(baseUrl, function(data) {
    getTotal(data.checkout);
  });
}
