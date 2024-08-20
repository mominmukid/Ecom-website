import { finalBill } from "./finalBills";
import { getDataFromLs } from "./getDataFromLs";
import { showTost } from "./showTost";
import { updateCartvalue } from "./updateCartValue";
export const cartProductDelete = (id) => {
  let DataFromLs = getDataFromLs();
  let updateProduct = DataFromLs.filter((currEle) => currEle.id !== id);
  localStorage.setItem("cartProductLs", JSON.stringify(updateProduct));
  let removeDiv = document.querySelector(`#card${id}`);
  if (removeDiv) {
    removeDiv.remove();
    showTost("delete", id);
  }
  updateCartvalue(updateProduct);
  finalBill();
};
