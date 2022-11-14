const modalWindow = window.modal_main; 
const oldClassModal = modalWindow.className;
modalWindow.className = "modal modal_active";

// Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close


    
const closeWindow = document.getElementsByClassName("modal__close");

closeWindow[0].onclick = function () {
    modalWindow.className = "modal";
}

// По нажатию на элемент с классом show-success покажите окно #modal_success

    const modalSuccess = window.modal_success; 
    const oldClassSuccess = modalSuccess.className;
    
closeWindow[1].onclick = function () {
    
    modalWindow.className = "modal";
    modalSuccess.className = "modal modal_active";
}

closeWindow[2].onclick = function () {
    // const modalSuccess = window.modal_success; 
    // const oldClassSuccess = modalSuccess.className;
    modalSuccess.className = "modal";
}
