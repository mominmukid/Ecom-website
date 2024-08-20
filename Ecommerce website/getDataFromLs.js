import { updateCartvalue } from "./updateCartValue";

export const getDataFromLs = () => {
  let cartproduct = localStorage.getItem("cartProductLs");
  if (!cartproduct) {
    return [];
  }
  cartproduct = JSON.parse(cartproduct);
  updateCartvalue(cartproduct);
  return cartproduct;
};
