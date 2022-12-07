const tabNavigation = Array.from(document.querySelectorAll(".tab"));
tabNavigation.forEach((el) => {
    el.addEventListener("click", (event) => {
        const currentTabs = event.target.closest(".tab__navigation");
        const currentTab = Array.from(currentTabs.querySelectorAll(".tab"));
        const currentContent = event.target.closest(".tabs").querySelector(".tab__contents");
        const tabContents = Array.from(currentContent.querySelectorAll(".tab__content"));

        let tabActive = currentTabs.querySelector(".tab_active");
        let i = currentTab.indexOf(tabActive);

        tabContents[i].classList.remove("tab__content_active");
        tabActive.classList.remove("tab_active");
        
        event.target.classList.add("tab_active");
        tabActive = currentTabs.querySelector(".tab_active");
        
        i = currentTab.indexOf(tabActive);
        tabContents[i].classList.add("tab__content_active");
    });
});