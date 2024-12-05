let Menu=document.querySelector(".fa-bars")
let BtnClose=document.querySelector(".BtnClose")
let MenuModal=document.querySelector(".MenuModal")

import { getUserForCategori } from "./api.js"
import { getUserForProduct } from "./api.js"
getUserForCategori()
getUserForProduct()
Menu.onclick=()=>
{
    MenuModal.showModal()
}
BtnClose.onclick=()=>
{
    MenuModal.close()
}