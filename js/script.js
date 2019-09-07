//===========================================================
//functions.
function changeBackgr(){
    //console.log(color1.value);
    //change the background color
    body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
    //show background color values on the screen
    h3.textContent = body.style.background;
}

//===========================================================

var body = document.getElementById("bodyid");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
/* console.log(background);
console.log(color1);
console.log(color2);
*/

color1.addEventListener("input", changeBackgr);
color2.addEventListener("input", changeBackgr);