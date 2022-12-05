const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((el) => {
    el.addEventListener("click", (e) => {
        const eTargetDropdown = e.target.closest(".dropdown")
        const currentList = eTargetDropdown.querySelector(".dropdown__list");
        currentList.classList.toggle("dropdown__list_active");


        eTargetDropdown.querySelectorAll("a.dropdown__link").forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const value = eTargetDropdown.querySelector(".dropdown__value");
                value.textContent = event.target.textContent;
            })
        })
    })
})
