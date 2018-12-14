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

function showModal(type) {
  img = "/img/cart.png";
  title = "compra confirmada";
  text = "enviaremos atualizações sobre o pedido para o seu email";
  if (type && type == "cancel") {
    img = "/img/cart-red.png";
    title = "compra cancelada";
    text = "o pedido não foi enviador e você não será cobrado";
  }
  $("[data='modal-image']").prop("src", img);
  $("[data='modal-title']").text(title);
  $("[data='modal-text']").text(text);
  $("[data='modal']").show();
}

function hideModal() {
  $("[data='modal']").hide();
}
