import { get } from "./dom.js";

let inputSearch=document.querySelector(".inputSearch")
let SelectName=document.querySelector(".SelectName")
 export  let url="http://localhost:3000/Product"

export default async function getUser(page=1, perPage=8) {
    try {
        const {data}=await axios.get(`${url}?_page=${page}&_per_page=${perPage}`)
        get(data.data)
    } catch (error) {
        console.error(error);
    }
}

let btnPagination2=document.querySelector(".btnPagination2")
let btnPagination3=document.querySelector(".btnPagination3")
let btnPagination1=document.querySelector(".btnPagination1")
 
    btnPagination1.onclick=()=>
    {
    getUser(1,8)
    }
    btnPagination2.onclick=()=>
    {
    getUser(2,8)
    console.log(getUser(2,8));
    
    }
    btnPagination3.onclick=()=>
    {
        getUser(3,8)
    }
export async function DeleteUser(id) {
    try {
        await axios.delete(`${url}/${id}`)
        getUser()
    } catch (error) {
        console.error(error);
    }
}

    inputSearch.oninput = async ()=>
    {
      try {
        const {data}=await axios.get(url)
         const result=data.filter(el=>
            el.Name.toLowerCase().includes(inputSearch.value.toLowerCase()))
        get(result)
      } catch (error) {
        console.error(error);
      }
    }
    
    

    // SelectName.onchange=async()=>
    // {
    //     if(SelectName.value=="All")
    //     {
    //         return getUser()
    //     }
    //     if(SelectName.value=="In stock")
    //     {
    //         try {
    //             const{data}=await axios.get(`${url}?Cout>${0}`)
    //             get(data)
    //             console.log(data);
                
    //        } catch (error) {
    //            console.error(error);
               
    //        }
    //     }
    //   else if(SelectName.value=="Out off stock")
    //    {
    //     try {
    //         const{data}=await axios.get(`${url}?Cout<=0`)
    //         get(data)
    //    } catch (error) {
    //        console.error(error);
           
    //    }
    //    }
    // }
