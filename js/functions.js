function getID() {
  var url = window.location.href;
  var id = url.substring(url.lastIndexOf("/") + 1);
  return id;
}

function loadResume(product, checkout) {
  $("[data='product-value']").text("R$ " + product.price.toFixed(2));
  $("[data='shippment-value']").text("R$ " + checkout.shippingPrice.toFixed(2));
}

function getTotal(checkout) {
  $("[data='total-value']").text("R$ " + checkout.totalPrice);
}

function getCurrency(currency) {
  return Number(currency.replace(/[^0-9.-]+/g, ""));
}
