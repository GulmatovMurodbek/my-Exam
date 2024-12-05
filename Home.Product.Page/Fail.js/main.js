let ArrOfProducts = [];
let rangeInput = document.querySelector(".priceRange")
let maxValue = document.querySelector(".Kalontarin")
let SelectAll = document.querySelector(".SelectAll")
let search__input = document.querySelector(".search__input")

let  ArrOfProduct=JSON.parse(localStorage.getItem("cart"))
let api = "http://localhost:3000/Product"


async function getProduct() {
  try {
    const { data } = await axios.get(api)
    ArrOfProducts = data;  
    getProductForProductPage(data)
  } catch (error) {
    console.error(error)
  }
}

getProduct()

rangeInput.addEventListener("input", () => {
  let value = rangeInput.value;  
  maxValue.textContent = `Max: $${value}`
  let RangeProduct = ArrOfProducts.filter(product => product.price <= value);
  getProductForProductPage(RangeProduct)
})
function getProductForProductPage(products) {
  const box2 = document.querySelector(".box2")
  box2.innerHTML = ""
  products.forEach((elemnt) => {
    let div = document.createElement("div")
    div.classList.add("divIfProduct")

    let img = document.createElement("img")
    img.src = elemnt.Avatar;
    img.classList.add("surat2")

    let btnLike = document.createElement("button")
    btnLike.innerHTML = `<svg style="width :20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>`
    btnLike.classList.add("btnLike")

    let btnAddToCart = document.createElement("button")
    btnAddToCart.innerText = "ADD TO CART"
    btnAddToCart.classList.add("btnAddToCart")
    btnAddToCart.onclick = () => {
      ArrOfProduct.push(elemnt)
      localStorage.setItem("cart", JSON.stringify(ArrOfProduct));
    };

    let btnInfo = document.createElement("button")
    btnInfo.innerHTML = `<svg style="width:20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>`;
    btnInfo.onclick = () => {
      localStorage.setItem("UserInfo", JSON.stringify(elemnt))
      window.location = "../../Info.page.Home/Main.html"
    };
    btnInfo.classList.add("btnInfo")

    let Name = document.createElement("h3")
    Name.innerHTML = elemnt.Name

    let Price = document.createElement("h3")
    Price.innerHTML = elemnt.price + "$"

    div.append(img, btnLike, btnInfo, btnAddToCart, Name, Price);
    box2.append(div)
  })
}

 SelectAll.onchange=async()=>
 {
    if(SelectAll.value=="All")
    {
        return getProduct()
    }
 try {
  const {data}=await axios.get(`${api}?CategorId=${SelectAll.value}`)
  getProductForProductPage(data)
 } catch (error) {
    console.error(error);
 }
 }
   search__input.oninput=async ()=>
   {
    try {
       const {data}=await axios.get(api)
       let result=data.filter((el)=>
    {
        return el.Name.toLowerCase().includes(search__input.value.toLowerCase())
    })
    getProductForProductPage(result)
    } catch (error) {
        console.error(error);
    }
   }






