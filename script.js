let modalDiv = document.querySelector(".modal-div");
let btnClick = document.querySelector(".btn");
let btnClose = document.querySelector(".close-btn");

btnClick.addEventListener("click", () => {
    modalDiv.classList.toggle("open-modal");
    document.body.style.backgroundColor = "rgba(104, 218, 238, 0.123)";
})

btnClose.addEventListener("click", () => {
    modalDiv.classList.remove("modal-box");
})