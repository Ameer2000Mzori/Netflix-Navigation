// selecting our elements
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("close-Icon");
var blackBox = document.getElementsByClassName("black-Box")[0];
var redBox = document.getElementsByClassName("red-Box")[0];
var navbar = document.getElementsByClassName("navbar")[0];
// global veribales
// functions
//event lisnters
openBtn.addEventListener("click", function () {
    console.log("activated");
    blackBox.classList.add("active");
    redBox.classList.add("active");
    navbar.classList.add("active");
    openBtn.classList.add("active");
});
closeBtn.addEventListener("click", function () {
    console.log("dactivated");
    blackBox.classList.remove("active");
    redBox.classList.remove("active");
    navbar.classList.remove("active");
    openBtn.classList.remove("active");
});
