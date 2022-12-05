const tabNavigation = Array.from(document.querySelectorAll(".tab"));
const tabContents = Array.from(document.querySelectorAll(".tab__content"));
let tabActive = document.querySelector(".tab_active");

for (let el of tabNavigation) {
    el.addEventListener("click", (e) => {   
        
        if (e.currentTarget !== tabActive) {
            let i = tabNavigation.findIndex((item) => item === tabActive);
            tabContents[i].classList.remove("tab__content_active");
            e.currentTarget.classList.add("tab_active");               
            tabActive.classList.remove("tab_active");
            tabActive = document.querySelector(".tab_active");
            i = tabNavigation.findIndex((item) => item === tabActive);
            tabContents[i].classList.add("tab__content_active");
        }
    });
}