import { getDataFromLs } from "./getDataFromLs";

const productSubTotal = document.querySelector(".productSubTotal");
const productFinalTotal = document.querySelector(".productFinalTotal");

export const finalBill = () => {
  let getdataFromLs = getDataFromLs();
  let intialValue = 0;
  let Totalprice = getdataFromLs.reduce((accum, currEle) => {
    let productPrice = parseInt(currEle.price) || 0;
    return productPrice + accum;
  }, intialValue);
  //   console.log(Totalprice);

  Totalprice = Totalprice.toFixed(2);
  productSubTotal.textContent = `₹${Totalprice}`;
  productFinalTotal.textContent = `  ₹${Totalprice + 50}`;
};
