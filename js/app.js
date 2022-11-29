// login info api
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

// upon successful login, the user is taken to the home page
// cookies are created for future use
function loginSuccess(response){
    Cookies.set(`sessionToken`, response.data.token);
    console.log(`login`);
    location.href="home.html";
}

// a message appears when the user does not have a successful login
function loginFailure(error) {
    console.log(error.response.data.error);
    loginData.insertAdjacentHTML(`beforeend`, `<h4>Log in unsuccessful, please check your username and password and try again.</h4>`);
}

// cookies are deleted upon user logout.
function logout(){
    Cookies.remove(`sessionToken`);
    if(Cookies.get(`sessionToken`) != undefined) {
        console.log(`you are still logged in`);
    } else {
        console.log(`please visit again`);
    }
}

let loginData = document.getElementById(`loginData`);
document.getElementById(`loginButton`).addEventListener(`click`, login);
document.getElementById(`logout`).addEventListener(`click`, logout);

