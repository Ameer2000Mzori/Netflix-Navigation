// selecting our elements
const openBtn: any = document.getElementById("openBtn");
const closeBtn: any = document.getElementById("close-Icon");
const blackBox = document.getElementsByClassName("black-Box")[0];
const redBox = document.getElementsByClassName("red-Box")[0];
const navbar = document.getElementsByClassName("navbar")[0];

// global veribales

// functions

//event lisnters
openBtn.addEventListener("click", () => {
  console.log("activated");

  blackBox.classList.add("active");
  redBox.classList.add("active");
  navbar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  console.log("dactivated");

  blackBox.classList.remove("active");
  redBox.classList.remove("active");
  navbar.classList.remove("active");
});
