const modalWindow = document.querySelector(".modal");
const oldClassModal = modalWindow.className;
modalWindow.classList.add("modal_active");
const modalClose = Array.from(document.querySelectorAll(".modal__close_times"));
const modalChange = Array.from(document.querySelectorAll(".show-success"));

modalClose.forEach((el) => {
    el.addEventListener("click", (e) => {
        const modalActive = e.target.closest(".modal");
        modalActive.classList.toggle("modal_active");

    });
});

modalChange.forEach((el) => {
    el.addEventListener("click", (e) => {
        const modalActive = e.target.closest(".modal");
        modalActive.classList.toggle("modal_active");
        modalWindow.nextElementSibling.classList.toggle("modal_active");
    });
});
    