let modal = document.querySelector(".stay-touch-btn");
let modalShow = document.querySelector(".modal");
let btnHide = document.querySelector(".btn-close");

modal.addEventListener("click" , show )
btnHide.addEventListener("click" ,hide )
modalShow.addEventListener("click" , afterClickAnotherPlace)

function  show() {
    modalShow.classList.add("show")
    modalShow.classList.remove("hide")
}
function  hide() {
    modalShow.classList.add("hide")
    modalShow.classList.remove("show")
}
function afterClickAnotherPlace (e) {
    if(e.target === modalShow ){
        hide ()
    }
}
