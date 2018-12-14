var baseUrl = "/api/checkouts/" + getID();
var clicked = 0;

jQuery.get(baseUrl, function(data) {
  $("[data='product-image']").prop("src", data.product.image); // change the image for the image of the server
  loadCoupons(data.checkout.availableCoupons);
  loadResume(data.product, data.checkout);
  getTotal(data.checkout);
});

jQuery(document).ready(function() {
  jQuery("[data='coupon']").click(function() {
    if ($("input[name='radio']:checked").val() != "none" && clicked == 0) {
      selectCoupon(this);
      clicked = 1;
    }
  });
});

jQuery("[data='unselect-coupon']").click(function() {
  clicked = 0;
  hideCoupon();
});

jQuery("[data='cancel-button']").click(function() {
  showModal("cancel");
});

jQuery("[data='confirm-button']").click(function() {
  jQuery.post(baseUrl, function(data) {
    if (data.status == "success") {
      showModal();
    } else {
      showModal("error");
    }
  });
});

jQuery("[data='modal']").click(function() {
  hideModal();
});
