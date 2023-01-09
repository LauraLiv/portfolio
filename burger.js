const menu = document.querySelector("nav ul");
const burger = document.querySelector("#burger_knap");

burger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("vismenu")) {
    menu.classList.remove("vismenu");
  } else {
    menu.classList.add("vismenu");
  }
}
