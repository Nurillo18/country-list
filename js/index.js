let nuri = document.querySelector(".btn_changer")
let elBody = document.querySelector("body")

nuri.addEventListener("click" , function () {
    elBody.classList.toggle("dark")
})