/** My TODO list for here
 *  - Show and Hide Modals
 *  - Send the request when the confirm button is pressed
 */

var baseUrl = "/api/checkouts/" + getID();

jQuery.get(baseUrl, function(data) {
  console.log(data);
  $("[data='product-image']").prop("src", data.product.image); // change the image for the image of the server
  loadCoupons(data.checkout.availableCoupons);
  loadResume(data.product, data.checkout);
  getTotal(data.checkout);
});

jQuery(document).ready(function() {
  jQuery("[data='coupon']").click(function() {
    selectCoupon(this);
  });

  jQuery("[data='unselect-coupon']").click(function() {
    hideCoupon();
  });
});
