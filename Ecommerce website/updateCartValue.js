const updateAddtocartPrice = document.querySelector("#cartValue");

export const updateCartvalue = (cartPrtduct) => {
  updateAddtocartPrice.innerHTML = `<i class="fa-solid fa-cart-shopping" id="addToCart"> ${cartPrtduct.length}</i>`;
};
