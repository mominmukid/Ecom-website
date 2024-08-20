import { addToCart } from "./addToCart";
import { homeQuntityTogal } from "./homeQuntityTogal";

const productContainer = document.querySelector("#productContainer");
const productTemplet = document.querySelector("#productTemplate");

export const showProductContainer = (product) => {
  if (!product) {
    return false;
  }
  product.forEach((currPro) => {
    const { brand, category, name, price, stock, description, image, id } =
      currPro;

    const productClone = document.importNode(productTemplet.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      4 * price
    }`;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (eve) => {
        homeQuntityTogal(eve, id, stock);
      });
    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (eve) => {
        addToCart(eve, id, stock, price);
      });
    productContainer.append(productClone);
  });
};
