// selecting our elements
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("close-Icon");
var blackBox = document.getElementsByClassName("black-Box")[0];
// global veribales
// functions
//event lisnters
openBtn.addEventListener("click", function () {
    console.log("hi ");
    blackBox.classList.add("active");
});
closeBtn.addEventListener("click", function () {
    console.log("hi ");
    blackBox.classList.remove("active");
});
