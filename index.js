window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  //Skjul alle skærme
  document.querySelector("#lilla_containor").classList.add("pos_lilla");
  document.querySelector("#lilla_containor").classList.add("lilla");
}
