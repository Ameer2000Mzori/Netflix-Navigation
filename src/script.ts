// selecting our elements
const openBtn: any = document.getElementById("openBtn");
const closeBtn: any = document.getElementById("close-Icon");
const blackBox = document.getElementsByClassName("black-Box")[0];

// global veribales

// functions

//event lisnters
openBtn.addEventListener("click", () => {
  console.log("hi ");
  blackBox.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  console.log("hi ");
  blackBox.classList.remove("active");
});
