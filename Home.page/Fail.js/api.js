import { getUserCategori } from "./dom.js"
import { getUserProduct } from "./dom.js"
import { CategoriGEtDiv } from "./dom.js"
import { getUserProduct2 } from "./dom.js"
let apiProduct="http://localhost:3000/Product"
let apiCategori="http://localhost:3000/Categori"

// let Cart=JSON.parse(localStorage.getItem("cart"))
// console.log(Cart);
//  let cout=document.querySelector(".CouterOf")
//  cout.innerHTML=`${Cart.length}`


export async function getUserForCategori() {
  try {
     const {data}=await axios.get(apiCategori)
     getUserCategori(data)
     CategoriGEtDiv(data)
  } catch (error) {
    console.error(error);
  }
}

export async function getUserForProduct(params) {
    try {
        const {data}=await axios.get(apiProduct)
        getUserProduct(data)
        getUserProduct2(data)
    } catch (error) {
        console.error(error);
    }
}