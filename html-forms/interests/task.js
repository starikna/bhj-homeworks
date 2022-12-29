const interest = document.querySelectorAll(".interest__check");

interest.forEach((el) => {
    el.addEventListener("change", (e) => {
        const eTargetBox = e.target;
        const childBox = eTargetBox.parentElement.nextElementSibling.querySelectorAll(".interest__check");
        if (eTargetBox.checked) {
            childBox.forEach((childBox) => childBox.checked = true);
        } else {
            childBox.forEach((childBox) => childBox.checked = false);
        }
    });
});