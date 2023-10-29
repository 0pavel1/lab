const menuBtn = document.querySelector(".menu__btn");
const classes = document.querySelector(".menu__list").classList;
menuBtn.addEventListener("click", function() {classes.toggle("hide");});

const portBtn = document.querySelector(".portfolio__btn");
const classesCont = document.querySelector(".container").classList;
const classesPort = document.querySelector(".containerPort").classList;
portBtn.addEventListener("click", function() {classesCont.toggle("hide");classesPort.toggle("hide");});

