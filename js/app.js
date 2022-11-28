function login(){
    axios.request({
        url : "https://reqres.in/api/login",
        method : `POST`,
        data :{
            email : document.getElementById(`username`).value,
            password : document.getElementById(`password`).value,
        }
    }).then(loginSuccess).catch(loginFailure)
}

function loginSuccess(response){
    Cookies.set(`sessionToken`, response.data.token);
    console.log(`login`);
    location.href="home.html";
}

function loginFailure(error) {
    console.log(error.response.data.error);
    loginData.insertAdjacentHTML(`beforeend`, `<h4>Log in unsuccessful, please check your username and password and try again.</h4>`);
}

let loginData = document.getElementById(`loginData`);
document.getElementById(`loginButton`).addEventListener(`click`, login);

// function getColor(){
// axios.request ({
//     url : "https://reqres.in/api/unknown",
//     method : `POST`,
//     data : {
        
//     }
// }).then(colorSuccess).catch(colorFailure)
// }

// // function login(){

// // }

// function colorSuccess(response){
//     let colors = response.data;
//     console.log(colors);
// }

// function colorFailure(error){
//     console.log(error);
// }

// document.getElementById(`colorBox`).addEventListener(`click`, getColor);

// function login(){
//     axios.request({
//         url : "https://reqres.in/api/login",
//         method : `POST`,
//         data :{
//             email : document.getElementById(`usernameBox`).value,
//             password : document.getElementById(`passwordBox`).value,
//         }
//     }).then(loginSuccess).catch(loginFailure);
// }

// function loginSuccess(response){
//     Cookies.set(`sessionToken`, response.data.token);
//     alert("Welcome to the website, Mr. Holt");
// }

// function loginFailure(error){
//     console.log(error.response.data.error);
//     alert(error.response.data.error);
// }
// document.getElementById(`submitPost`).addEventListener(`click`, submitPost);
// document.getElementById(`loginButton`).addEventListener(`click`, login);