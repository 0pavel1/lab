function hide(object,trigger) {
    const Btn = document.querySelector(trigger);
    const Block = document.querySelector(object);
    Btn.addEventListener("click", function() {Block.classList.toggle("hide");})
    }
hide(".menu__list", ".menu__btn")
document.querySelector(".portfolio__btn").addEventListener("click", function() {document.getElementById("B").style.background = "#FFF";})
hide(".container", ".portfolio__btn")
hide(".containerPort", ".portfolio__btn")
document.querySelector(".portfolio__btn").addEventListener("click", function() {document.querySelector(".portfolio__btn").classList.toggle("hide");})
document.querySelector(".portfolio__btn").addEventListener("click", function() {document.querySelector(".info__btn").classList.toggle("hide");})
document.querySelector(".info__btn").addEventListener("click", function() {document.getElementById("B").style.background = "#000";})
hide(".container", ".info__btn")
hide(".containerPort", ".info__btn")
document.querySelector(".info__btn").addEventListener("click", function() {document.querySelector(".portfolio__btn").classList.toggle("hide");})
document.querySelector(".info__btn").addEventListener("click", function() {document.querySelector(".info__btn").classList.toggle("hide");})

