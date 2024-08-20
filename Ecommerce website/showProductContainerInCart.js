import { cartQuntityTogal } from "./cartQuntityTogal";
import product from "./Api/products.json";
import { cartProductDelete } from "./cartProductDelete";
import { fechDataFromLs } from "./fechQuntutyFromLs";
import { getDataFromLs } from "./getDataFromLs";

const productContainer = document.querySelector("#productCartContainer");
const productTemplet = document.querySelector("#productCartTemplate");

let cardProducts = getDataFromLs();
let filterdElement = product.filter((currele) => {
  return cardProducts.some((currelement) => currele.id === currelement.id);
});

export const showProductContainerInCart = () => {
  filterdElement.forEach((currPro) => {
    const { name, category, image, stock, id, price } = currPro;

    const productClone = document.importNode(productTemplet.content, true);

    const lsActaldata = fechDataFromLs(id, price);
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productPrice").textContent = lsActaldata.price;
    productClone.querySelector(".productQuantity").textContent =
      lsActaldata.quntity;

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", (eve) => {
        cartProductDelete(id);
      });

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (eve) => {
        cartQuntityTogal(eve, id, stock, price);
      });

    productContainer.append(productClone);
  });
};

//   This is my code

// export const showProductContainerInCart = (products, LocalStrogeData) => {
//   LocalStrogeData.forEach((elementofLs) => {
//     products.forEach((currentEle) => {
//       if (elementofLs.id === currentEle.id) {
//         const { price, id, quntity } = elementofLs;
//         const { category, name, image, stock } = currentEle;

//         const productClone = document.importNode(productTemplet.content, true);
//         productClone
//           .querySelector("#cardValue")
//           .setAttribute("id", `card${id}`);
//         productClone.querySelector(".category").textContent = category;
//         productClone.querySelector(".productName").textContent = name;
//         productClone.querySelector(".productImage").src = image;
//         productClone.querySelector(".productImage").alt = name;
//         productClone.querySelector(".productPrice").textContent = price;
//         productClone.querySelector(".productQuantity").textContent = quntity;
//         productClone
//           .querySelector(".stockElement")
//           .addEventListener("click", (eve) => {
//             cartQuntityTogal(eve, id, stock);
//           });

//         productClone
//           .querySelector(".remove-to-cart-button")
//           .addEventListener("click", (eve) => {
//             cartProductDelete(id);
//           });
//         productContainer.append(productClone);
//       }
//     });
//   });
// };
