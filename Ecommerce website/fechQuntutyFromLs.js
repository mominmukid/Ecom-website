import { getDataFromLs } from "./getDataFromLs";

export const fechDataFromLs = (id, price) => {
  let getdataLs = getDataFromLs();
  let existProduct = getdataLs.find((currele) => currele.id === id);
  let quntity = 1;
  if (existProduct) {
    quntity = existProduct.quntity;
    price = existProduct.price;
  }
  return { quntity, price };
};
