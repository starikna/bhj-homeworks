window.addEventListener("scroll", (e) => {
    const reveal = e.target.querySelectorAll(".reveal");

    reveal.forEach((el) => {
        function isVisible (elem) {
        let { top, bottom } = elem.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) {
            el.classList.remove("reveal_active");
            return false;
        }

        el.classList.add("reveal_active");
        return true;
        }
        isVisible(el);
    });   
});