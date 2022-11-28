function getColor(){
axios.request ({
    url : "https://reqres.in/api/unknown",
    method : `GET`,
    data : {
        data : [{
    }]
}}).then(colorSuccess).catch(colorFailure)
}

function colorSuccess(response){
    let color = response.data.data;
    console.log(color);
    for (let i = 0; i < color.length; i++){
    document.getElementById(`colorBox`).insertAdjacentHTML(`afterbegin`, `<h1>${color[i][`color`]}</h1>`);
    // return 
    // Cookies.set(`backColor`)
    // document.getElementById(`colorBox`).innerHTML.style.backgroundColor="(`${color[i][`color`]}`)";

    document.getElementById(`colorBox`).insertAdjacentHTML(`afterbegin`, `<h4>Color Name: ${color[i][`name`]}</h4>`);}
}

function readColor(){
    alert(document.getElementById(`colorBox`).style.backgroundColor);
}

document.getElementById(`colorBox`).addEventListener(`load`, readColor);
// document.getElementById(`colorBox`).style.backgroundColor="#fff";
function colorFailure(error){
    console.log(error);
}

document.getElementById(`get`).addEventListener(`click`, getColor);