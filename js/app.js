var elheader = document.querySelector(".header");
var elbtn = document.querySelector("#header-btn");

elbtn.addEventListener("click", function() {
  elheader.classList.toggle("show");
});