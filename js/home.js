// retrieves the colours from api on successful login
function getColor(){
axios.request ({
    url : "https://reqres.in/api/unknown",
    method : `GET`,
    data : {
        data : [{
    }]
}}).then(colorSuccess).catch(colorFailure)
}

// shows the colors and their information obtained from the api
function colorSuccess(response){
    // there are pages with colors on them, and the data that was required was in an array 
    let color = response.data.data;
    console.log(color);
    for (let i = 0; i < color.length; i++){
        // a new div was put in for each iteration of the loop so that each color would display on the page, along with it's description
        let newDiv = document.createElement(`div`);
        newDiv.insertAdjacentHTML(`afterbegin`, `<h3>Color Name: ${color[i][`name`]} <br>
        Year Created: ${color[i][`year`]}</h3>`);
        // the div was styled with the color in the api response
        newDiv.style.backgroundColor=`${color[i][`color`]}`;
        // the new div was placed as a child of the existing html div.
        document.getElementById(`colorBox`).appendChild(newDiv);
    }
}

// message when something goes wrong
function colorFailure(error){
    console.log(error);
    document.getElementById(`colorBox`).insertAdjacentHTML(`beforeend`, `<h3>Something went wrong, please try again later.</h3>`);
}

// reading cookies created on the app.js (main) page to verify login occured
if(Cookies.get(`sessionToken`) != undefined){
    getColor();
} else {
    console.log(`no session token`);
    document.getElementById(`error`).innerHTML = `<h3>You are not logged in. Please press the 'home' button and log in.</h3>`;
}




