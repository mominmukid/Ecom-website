// import { getDataFromLs } from "./getDataFromLs";
// import products from "./Api/products.json";
import { finalBill } from "./finalBills";

import { getDataFromLs } from "./getDataFromLs";

export const cartQuntityTogal = (event, id, stock, price) => {
  const currntElement = document.querySelector(`#card${id}`);
  const productQuntity = currntElement.querySelector(".productQuantity");
  const productPrice = currntElement.querySelector(".productPrice");

  let quntity = 1;

  let localStoragePrice = 0;
  let dataFromLs = getDataFromLs();

  let existProduct = dataFromLs.find((currele) => currele.id === id);

  if (existProduct) {
    quntity = existProduct.quntity;
    localStoragePrice = existProduct.price;
  } else {
    localStoragePrice = price;
    // price = price;
  }

  if (event.target.className === "cartIncrement") {
    if (quntity < stock) {
      quntity++;
    } else if (quntity == stock) {
      quntity = stock;
      localStoragePrice = stock * price;
    }
  } else if (event.target.className === "cartDecrement") {
    if (quntity > 1) {
      quntity--;
    }
  }
  localStoragePrice = price * quntity;
  let updatedCart = { id, price: localStoragePrice, quntity };
  let arrLsProduct = dataFromLs.map((currprod) => {
    return currprod.id == id ? updatedCart : currprod;
  });
  localStorage.setItem("cartProductLs", JSON.stringify(arrLsProduct));

  productQuntity.innerText = quntity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));
  productPrice.innerText = localStoragePrice;
  finalBill();
};

//  This is my code

// let dataFromLs = getDataFromLs();
// export const cartQuntityTogal = (event, id, stock) => {
//   const currntElement = document.querySelector(`#card${id}`);
//   let price;
//   products.forEach((currntElement) => {
//     if (currntElement.id == id) {
//       price = currntElement.price;
//     }
//   });
//   const productQuntity = currntElement.querySelector(".productQuantity");
//   const productPrice = currntElement.querySelector(".productPrice");

//   let quntity = parseInt(productQuntity.getAttribute("data-qun")) || 1;

//   if (event.target.className === "cartIncrement") {
//     if (quntity < stock) {
//       quntity++;
//       price = Number(quntity * price);
//       let updatedCart = { id, price, quntity };
//       dataFromLs = dataFromLs.map((currprod) => {
//         return currprod.id == id ? updatedCart : currprod;
//       });
//       localStorage.setItem("cartProductLs", JSON.stringify(dataFromLs));
//     } else if (quntity == stock) {
//       quntity = stock;
//     }
//   } else if (event.target.className === "cartDecrement") {
//     if (quntity > 1) {
//       quntity--;
//       price = Number(quntity * price);
//       let updatedCart = { id, price, quntity };
//       dataFromLs = dataFromLs.map((currprod) => {
//         return currprod.id == id ? updatedCart : currprod;
//       });
//       localStorage.setItem("cartProductLs", JSON.stringify(dataFromLs));
//     }
//   }

//   productQuntity.innerText = quntity;
//   productPrice.innerText = price;
//   productQuntity.setAttribute("data-qun", quntity);

//   finalBill();
//   return quntity;
// };
