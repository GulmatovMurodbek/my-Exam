
import { url } from "../Admin.Product.Page/Fail.js/api.js"
let EditForm = document.querySelector(".EditForm")

let User = JSON.parse(localStorage.getItem("edituser"))
// console.log(User.id);
let files = null
EditForm["FileImage"].onchange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        files = reader.result;
        console.log(files);
    }
}


EditForm["inpName"].value = User.Name
EditForm["Description"].value = User.Description
EditForm["SelectCategories"].value = User.Categories
EditForm["InpCount"].value = User.Count
EditForm["InpPrice"].value = User.price
EditForm["selectSize"].value = User.Optios
EditForm["SelectWigth"].value = User.Weight
files=User.Avatar





console.log(User);

EditForm.onsubmit = async (event) => {
    event.preventDefault()

    let EditUser = {
        Name: EditForm["inpName"].value,
        Description: EditForm["Description"].value,
        Categories: EditForm["SelectCategories"].value,
        Count: EditForm["InpCount"].value,
        price: EditForm["InpPrice"].value,
        Optios: EditForm["selectSize"].value,
        Weight: EditForm["SelectWigth"].value,
        Avatar: files
    }
    try {
        await axios.put(`${url}/${User.id}`, EditUser)
        window.location = "../Admin.Product.Page/main.html"
    } catch (error) {
        console.error(error);
    }
}


