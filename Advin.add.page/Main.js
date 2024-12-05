// let Colors=document.querySelector(".Colors")

// let colors=["red","blue","green","brown","yellow"]

// colors.forEach(element => {
//     let span=document.createElement("span")
//     span.classList.add("spanColor")
//     span.style.backgroundColor=`${element}`
//     Colors.append(span)
//     console.log(element);
// })



// GetUser2()
// let Colors = document.querySelector(".Colors"); 

// let colors = ["red", "blue", "green", "brown", "yellow"];

// colors.forEach(element => {
    //     let span = document.createElement("span");
    //     span.classList.add("spanColor");
    //     span.style.backgroundColor = `${element}`;
    //     span.style.width="100px"
    //     span.style.height="200px"
    //     span.innerHTML=element
    //     Colors.append(span);
    //     console.log(element);
    // })
    import getUser from "../Admin.Product.Page/Fail.js/api.js";
    import { url } from "../Admin.Product.Page/Fail.js/api.js";
    let AddForm=document.querySelector(".AddForm")
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
    postUser(
        {
            "Name":AddForm["inpName"].value,
            "Description":AddForm["Description"].value,
            "CategorId":AddForm["SelectCategories"].value,
            "price":AddForm["InpPrice"].value,
            "Count":AddForm["InpCout"].value,
            "Avatar":files,
            "Optios":AddForm["selectSize"].value,
            "Weight":AddForm["SelectWigth"].value,
            "Color":AddForm["ColorInput"].value,
        }
    )
    window.location="../Admin.Product.Page/main.html"
}

async function postUser(user) {
    try {
        await axios.post(url,user)
        getUser()
    } catch (error) {
        console.error(error);
    }
}





