var css = document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");

// console.log(css);
// console.log(color1);
// console.log(color2);
//action performed while inputing data in INPUT
var body=document.getElementById("gradient");
 console.log(body);
 function setgrad()
 {
 	body.style.background = " linear-gradient ( to right, " + color1.value +", "	+ color2.value +")";
 	css.textContent = body.style.background + "grad;";

 }
color1.addEventListener("input", setgrad);
color2.addEventListener("input", setgrad);
