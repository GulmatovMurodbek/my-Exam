let Api = "http://localhost:3000/User"
let form = document.querySelector(".form")

// console.log(Api.Name);

async function GetUser() {
    try {
        const { data } = await axios.get(Api)
        console.log(data);

        get(data)
    } catch (error) {
        console.error(error);
    }
}
GetUser()

form.onsubmit = (event) => {
    event.preventDefault()
    postUser(
        {
            "Name": form["inpName"].value,
            "Email": form["Email1"].value,
            "Password": form["PosswordInp"].value,
        }
    )
    form.reset()

    window.location = "../../Amin.page.Dashboard/Main.html"
}
async function postUser(user) {
    try {
        await axios.post(Api, user)
        GetUser()
    } catch (error) {
        console.error(error);
    }
}

// function get(User)
// {
//     User.forEach(element => {
//         let getpassword=document.createElement("p")
//         getpassword.innerHTML=element.Password  

//         if(form["PosswordInp"].value==getpassword.value)
//         {
//             window.location="../../Amin.page.Dashboard/Main.html"
//         }
//     });

// }

// function get(data) {
//     data.forEach(element => {
//         if (form["Email1"].value != element.Email && form["PosswordInp"].value==element.Password) {
//             window.location = "../../Amin.page.Dashboard/Main.html"
//         }
//     });
// }