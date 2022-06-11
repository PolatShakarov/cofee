var elButton = document.querySelector(".plan__r-btn");
var elContent = document.querySelector(".plan__form")

elButton.addEventListener("click", function() {
    elButton.classList.toggle("rotate")
    elContent.classList.toggle("plan__form--open")
})