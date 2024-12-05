

let User=JSON.parse(localStorage.getItem("UserInfo"))
console.log(User);

let InfoName=document.querySelector(".InfoName")
let btnBay=document.querySelector(".btnBay")
let NameOF=document.querySelector(".NameOF")
let Price=document.querySelector(".Price")
let Description=document.querySelector(".Description")
let rang=document.querySelector(".rang")
let image2=document.querySelector(".image2")
let Size=document.querySelector(".Size")
let button2=document.querySelector(".button2")
InfoName.innerHTML=User.Name
NameOF.innerHTML=User.Name
Price.innerHTML=User.price+"$"
Description.innerHTML=User.Description
rang.style.backgroundColor=User.Color
image2.src=User.Avatar
Size.innerHTML=User.Optios

let  ArrOfProduct=JSON.parse(localStorage.getItem("cart"))
btnBay.onclick=()=>
{
    ArrOfProduct.push(User)
    localStorage.setItem("cart",JSON.stringify(ArrOfProduct))
}
console.log(ArrOfProduct);

button2.onclick=()=>
{
    window.location="../Home.page/Main.html"
}