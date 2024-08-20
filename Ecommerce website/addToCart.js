import { getDataFromLs } from "./getDataFromLs";
import { showTost } from "./showTost";
import { updateCartvalue } from "./updateCartValue";

getDataFromLs();

export const addToCart = (eve, id, stock) => {
  let arrLsProduct = getDataFromLs();
  const currntElement = document.querySelector(`#card${id}`);
  let quntity = currntElement.querySelector(".productQuantity").innerText;
  let price = currntElement.querySelector(".productPrice").innerText;
  // console.log(typeof parseInt(quntity), typeof Price);
  price = price.replace("₹", "");
  price = Number(price);
  quntity = Number(quntity);
  let exist = arrLsProduct.find((currprod) => currprod.id == id);

  if (exist && quntity > 1) {
    quntity = Number(exist.quntity + quntity);
    price = price * quntity;
    let updatedCart = { id, price, quntity };
    arrLsProduct = arrLsProduct.map((currprod) => {
      return currprod.id == id ? updatedCart : currprod;
    });

    localStorage.setItem("cartProductLs", JSON.stringify(arrLsProduct));
    showTost("add", id);
  }
  if (exist) {
    return false;
  }
  price = price * quntity;
  let updatedCart = { id, price, quntity };
  arrLsProduct.push(updatedCart);

  localStorage.setItem("cartProductLs", JSON.stringify(arrLsProduct));
  showTost("add", id);
  updateCartvalue(arrLsProduct);
};
