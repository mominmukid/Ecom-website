import "./style.css";
import products from "./Api/products.json";
import { getDataFromLs } from "./getDataFromLs";
import { showProductContainerInCart } from "./showProductContainerInCart";
import { finalBill } from "./finalBills";
let getdatadata = getDataFromLs();
showProductContainerInCart();
finalBill(getdatadata);
