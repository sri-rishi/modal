let modalDiv = document.querySelector(".modal-div");
let btnClick = document.querySelector(".btn");
let btnClose = document.querySelector(".close-btn");

btnClick.addEventListener("click", () => {
    modalDiv.classList.toggle("open-modal");
})

btnClose.addEventListener("click", () => {
    modalDiv.classList.remove("open-modal");
})