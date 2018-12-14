function showModal(type) {
  img = "/img/cart.png";
  title = "compra confirmada";
  text = "enviaremos atualizações sobre o pedido para o seu email";
  if (type && type == "cancel") {
    img = "/img/cart-red.png";
    title = "compra cancelada";
    text = "o pedido não foi enviador e você não será cobrado";
  } else if (type && type == "error") {
    img = "/img/cart-red.png";
    title = "algo deu errado";
    text = "por favor, tente novamente mais tarde";
  }
  $("[data='modal-image']").prop("src", img);
  $("[data='modal-title']").text(title);
  $("[data='modal-text']").text(text);
  $("[data='modal']").show();
}

function hideModal() {
  $("[data='modal']").hide();
}
