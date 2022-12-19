var modeicon = document.getElementById("modeicon");
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
modeicon.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("darkmode");
  document.querySelector("#main").classList.toggle("darkmode");
  modeicon.src =
    "https://img.icons8.com/sf-black-filled/64/cccbd2/moon-symbol.png";
});
