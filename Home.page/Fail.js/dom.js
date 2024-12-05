
let box1 = document.querySelector(".box1")
let SuratSlayder = document.querySelector(".SuratSlayder")
let Hours = document.querySelector(".Hours")
let Minites = document.querySelector(".Minites")
let Seconds = document.querySelector(".Seconds")
let Days = document.querySelector(".days")
let ProductDiv = document.querySelector(".ProductDiv")
let DivOfCategories = document.querySelector(".DivOfCategories")
let Productdiv = document.querySelector(".Productdiv")

let  ArrOfProduct=JSON.parse(localStorage.getItem("cart"))
export function getUserCategori(user) {
    user.forEach(element => {
        let bntCategory = document.createElement("button")
        bntCategory.innerHTML = element.Name
        bntCategory.onclick=()=>
        {
            window.location="/Home.Product.Page/Main.html"
        }
        let div = document.createElement("div")
        div.classList.add("divbtn")
        div.append(bntCategory)

        bntCategory.classList.add("btnAll")

        box1.append(div)
    });
}
// let SuratSlayder =document.querySelector(".SuratSlayder")
let cnt = 0
setInterval(() => {
    cnt++
    if (cnt == 3) {
        SuratSlayder.src = "https://images.ctfassets.net/xa93kvziwaye/1kb3XsB2STjKET4IHcuggk/dca2897025dd9bb195f23b248001c4bd/jb-au-20240305-computers-apple-macbook-air-m3-learn-more_carousel_mobile.png?fm=webp&f=top&fit=fill&w=1124&h=482"
    }
    if (cnt == 6) {
        SuratSlayder.src = "https://wfpquantum.s3.amazonaws.com/images/homes/articles/ultra/djqudv094fkktl6769b8-3188283.jpg"
    }
    if (cnt == 9) {
        SuratSlayder.src = "https://hips.hearstapps.com/hmg-prod/images/best-running-shoes-66f2f94293167.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*"
    }
    if (cnt == 12) {
        SuratSlayder.src = "https://nypost.com/wp-content/uploads/sites/2/2024/11/pursebags.jpg?quality=75&strip=all"
        cnt = 0
    }
}, 1000);


var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24)) - 1856;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 19;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    Days.innerHTML = days
    Hours.innerHTML = hours
    Minites.innerHTML = minutes
    Seconds.innerHTML = seconds
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);;


 export function getUserProduct(user)
 {
    user.forEach((elemnt)=>
    {
        let div=document.createElement("div")
        div.classList.add("divIfProduct")
        let img=document.createElement("img")
        img.src=elemnt.Avatar  
        img.classList.add("surat2")
        
        let btnLike=document.createElement("button")
        btnLike.innerHTML=`<svg style="width :20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        ` 

        let btnAddToCart = document.createElement("button")
        btnAddToCart.innerText = 'ADD TO CART'
        btnAddToCart.classList.add('btnAddToCart')

        btnAddToCart.onclick=()=>
        {
            ArrOfProduct.push(elemnt)
            console.log(ArrOfProduct);
            
            localStorage.setItem("cart",JSON.stringify(ArrOfProduct))
        }

        btnLike.classList.add("btnLike")
let btnInfo=document.createElement("button")
btnInfo.innerHTML=`<svg style="width:20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
`   
btnInfo.onclick=()=>
{
    localStorage.setItem("UserInfo",JSON.stringify(elemnt))
    window.location="../../Info.page.Home/Main.html"
}
 btnInfo.classList.add("btnInfo")
   let Name=document.createElement("h3")
   Name.innerHTML=elemnt.Name
   let Price=document.createElement("h3")
   Price.innerHTML=elemnt.price+"$"

   div.append(img,btnLike,btnInfo, btnAddToCart,Name,Price)
   ProductDiv.append(div)
//    Productdiv.append(div)

})

 }
 export function getUserProduct2(user)
 {
    user.forEach((elemnt)=>
    {
        let div=document.createElement("div")
        div.classList.add("divIfProduct")
        let img=document.createElement("img")
        img.src=elemnt.Avatar  
        img.classList.add("surat2")
        
        let btnLike=document.createElement("button")
        btnLike.innerHTML=`<svg style="width :20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        `       
        let btnAddToCart = document.createElement("button")
        btnAddToCart.innerText = 'ADD TO CART'
        btnAddToCart.classList.add('btnAddToCart')
        btnAddToCart.onclick=()=>
            {
                
                ArrOfProduct.push(elemnt)
                localStorage.setItem("cart",JSON.stringify(ArrOfProduct))
    
            }
btnLike.classList.add("btnLike")
let btnInfo=document.createElement("button")
btnInfo.innerHTML=`<svg style="width:20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
`   
btnInfo.onclick=()=>
    {
        localStorage.setItem("UserInfo",JSON.stringify(elemnt))
        window.location="../../Info.page.Home/Main.html"
    }
 btnInfo.classList.add("btnInfo")
   let Name=document.createElement("h3")
   Name.innerHTML=elemnt.Name
   let Price=document.createElement("h3")
   Price.innerHTML=elemnt.price+"$"

   div.append(img,btnLike,btnInfo, btnAddToCart,Name,Price)
//    ProductDiv.append(div)
   Productdiv.append(div)
})

 }

 export function CategoriGEtDiv(user)
 {
   user.forEach((elment)=>
{

   let div=document.createElement("div")
   div.classList.add("divCat")

   div.onclick=()=>
   {
    localStorage.setItem("Category",JSON.stringify(elment))
    window.location="../../Categori.page.Home/Main.html"
   }
   let Name=document.createElement("h4")
   Name.innerHTML=elment.Name

   let img=document.createElement("img")
   img.src=elment.Avatar



   div.append(img,Name)
   DivOfCategories.append(div)
})
 }