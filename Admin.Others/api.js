import { get2 } from "./dom.js";
let api="http://localhost:3000/Categori"

export default async function getUser2(params) {
    try {
        const {data}=await axios.get(api)
        get2(data)
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

let btnAdd=document.querySelector(".btnAdd")
let Addmodal=document.querySelector(".Addmodal")
let AddForm=document.querySelector(".AddForm")
let EditForm=document.querySelector(".EditForm")
let input=document.querySelector(".input")

btnAdd.onclick=()=>
{
    Addmodal.showModal()
}
let files=null
   AddForm["FileImage"].onchange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        files = reader.result;
        console.log(files); 
    }
} 
AddForm.onsubmit=(event)=>
{
event.preventDefault()
postUser({
    Name:AddForm["InpName"].value,
    Avatar:files
})
}

async function postUser(user) {
    try {
        await axios.post(api,user)
        getUser2()
    } catch (error) {
        console.error(error);
    }
}

export async function deleteUser(id) {
    try {
        await axios.delete(`${api}/${id}`)
        getUser2()
    } catch (error) {
       console.error(error);
    }
}
let filej=null
   EditForm["FileImage"].onchange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        filej = reader.result;
        console.log(files); 
    }
} 

 
// EditForm.onsubmit=async (event)=>
// {
//   event.preventDefault()
  
// }

export function EditUser(user)
{
    EditForm["InpName"].value=user.Name
    filej=user.Avatar

    EditForm.onsubmit=async(event)=>
    {
      event.preventDefault()
      user={
        ...user,
        Name:EditForm["InpName"].value,
        Avatar:filej
      }
      try {
        await axios.put(`${api}/${user.id}`,user)
        getUser2()
      } catch (error) {
        console.error(error);
        
      }
    }
}

input.oninput=async()=>
{
    try {
        const {data}=await axios.get(api)
        let  result=data.filter(element => {
         return  element.Name.toLowerCase().includes(input.value.toLowerCase())
        });
        get2(result)
    } catch (error) {
        console.error(error);
    }
}