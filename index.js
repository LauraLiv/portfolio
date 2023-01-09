const lillaContainer = document.querySelector("#lilla_container");
const groencontainer = document.querySelector("#groen_container");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  //assets starter

  lillaContainer.classList.add("pos_lilla");
  lillaContainer.classList.add("lilla");

  groencontainer.classList.add("pos_groen");
  groencontainer.classList.add("groen");
}

function assetsStop() {
  console.log("assetsStop");

  //assets stopper

  lillaContainer.classList.add("stop");

  groencontainer.classList.add("stop");
}
