const modalDiv = document.querySelector(".modal-div");
const btnClick = document.querySelector(".show-btn");
const btnClose = document.querySelector(".close-btn");

btnClick.addEventListener("click", () => {
    modalDiv.classList.toggle("open-modal");
})

btnClose.addEventListener("click", () => {
    modalDiv.classList.remove("open-modal");
})