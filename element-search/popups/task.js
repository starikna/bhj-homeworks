const modalWindow = window.modal_main; 
const oldClassModal = modalWindow.className;
modalWindow.className = "modal modal_active";
  
const closeWindow = document.getElementsByClassName("modal__close");

closeWindow[0].onclick = function () {
    modalWindow.className = "modal";
}

    const modalSuccess = window.modal_success; 
    const oldClassSuccess = modalSuccess.className;

closeWindow[1].onclick = function () {
    
    modalWindow.className = "modal";
    modalSuccess.className = "modal modal_active";
}

closeWindow[2].onclick = function () {

    modalSuccess.className = "modal";
}
