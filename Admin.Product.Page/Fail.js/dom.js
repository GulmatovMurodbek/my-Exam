import { DeleteUser } from "./api.js";
import { url } from "./api.js";
let tbody=document.querySelector(".tbody")
let DleteAll=document.querySelector(".DleteAll")
let ArrOfDelete = []
export function get(user)
{
    tbody.innerHTML=""
    user.forEach(element => {
        let tr=document.createElement("tr")
          tr.classList.add("trproduct")
         let tdChechbox=document.createElement("td")
         let checbox=document.createElement("input")
         checbox.classList.add("checbox")
         checbox.type="checkbox"
        tdChechbox.append(checbox)
        checbox.onclick = () => {
            if (checbox.checked) {
              ArrOfDelete.push(element.id)
            }
            else {
              ArrOfDelete = ArrOfDelete.filter((id) => id != element.id)
            }
          }
        
        let tdProduct=document.createElement("td")
        tdProduct.classList.add("tdNameAll")
        tdProduct.innerHTML=`
    <img class="surat4" src="${element.Avatar}" alt="">
    <h3 style="margin-left:15px">${element.Name}</h3>`

        let tdInvestory=document.createElement("td")
        tdInvestory.classList.add("Couttd")

        if(Number(element.Count)>0)
        {
            tdInvestory.innerHTML=`${element.Count}<span> In stock</span>`
        }
        else{
            tdInvestory.innerHTML=`<span class="out">Out of stock</span>`
        }

        let tdCategori=document.createElement("td")
        if(Number(element.CategorId)==1)
        {
            tdCategori.innerHTML="Woman’s Fashion"
        }
        if(Number(element.CategorId)==2)
        {
            tdCategori.innerHTML="Men’s Fashion"
        }
        if(Number(element.CategorId)==3)
        {
            tdCategori.innerHTML="Electronics"
        }
        if(Number(element.CategorId)==4)
        {
            tdCategori.innerHTML="Home & Lifestyle"
        }
        if(Number(element.CategorId)==5)
        {
            tdCategori.innerHTML="Medicine"
        }
        if(Number(element.CategorId)==6)
        {
            tdCategori.innerHTML="Sports & Outdoor"
        }
        if(Number(element.CategorId)==7)
        {
            tdCategori.innerHTML="Baby’s & Toys"
        }
        if(Number(element.CategorId)==8)
        {
            tdCategori.innerHTML="Groceries & Pets"
        }
        if(Number(element.CategorId)==9)
        {
            tdCategori.innerHTML="Groceries & Pets"
        }
         tdCategori.classList.add("tdCategori")
        let TdPrice=document.createElement("td")
        TdPrice.innerHTML=element.price+"$"
        TdPrice.classList.add("tdPrice")
        let tdAction=document.createElement("td")
        tdAction.classList.add("tdAction")

        let btnEdit=document.createElement("button")
        btnEdit.innerHTML=`<svg style="width:30px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
`       
       btnEdit.onclick=()=>
       {
        localStorage.setItem("edituser",JSON.stringify(element))
        window.location="../../Admin.Edit.page/Main.html"
       }
     btnEdit.classList.add("editbtn")
     let btnDelete=document.createElement("button")
     btnDelete.innerHTML=`<svg style="width:30px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
`
    btnDelete.onclick=()=>
    {
        DeleteUser(element.id)
    }
btnDelete.classList.add("deletebtn")
   tdAction.append(btnEdit,btnDelete)
       tr.append(tdChechbox,tdProduct,tdInvestory,tdCategori,TdPrice,tdAction)
       tbody.append(tr)
    });
}
DleteAll.onclick = () => {
    let conf = confirm("Are you sure")
    if (conf) {
      ArrOfDelete.forEach(async (id) => {
        try {
          await fetch(`${url}/${id}`,
            {
              method: "DELETE"
            })
          getUser()
        } catch (error) {
          console.error(error)
        }
      })
    }
  }