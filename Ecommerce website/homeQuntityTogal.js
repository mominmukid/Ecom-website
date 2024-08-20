export const homeQuntityTogal = (event, id, stock) => {
  const currntElement = document.querySelector(`#card${id}`);

  const productQuntity = currntElement.querySelector(".productQuantity");

  let quntity = parseInt(productQuntity.getAttribute("data-qun")) || 1;

  if (event.target.className === "cartIncrement") {
    if (quntity < stock) {
      quntity++;
    } else if (quntity == stock) {
      quntity = stock;
    }
  } else if (event.target.className === "cartDecrement") {
    if (quntity > 1) {
      quntity--;
    }
  }

  productQuntity.innerText = quntity;
  productQuntity.setAttribute("data-qun", quntity);
  return quntity;
};
