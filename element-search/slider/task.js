const arrowToLeft = document.querySelector(".slider__arrow_prev");
const arrowToRight = document.querySelector(".slider__arrow_next");
const sliderItems = Array.from(document.querySelectorAll(".slider__items div")); 

const slideManagementRight = () => {
    let slideActive = document.querySelector(".slider__item_active");
    let i = (sliderItems.findIndex(item => item === slideActive));

    sliderItems[i].classList.toggle("slider__item_active");
    let countSlide = ++i;

    (countSlide < sliderItems.length) ?
    i = countSlide :
    i = countSlide - sliderItems.length;

    sliderItems[i].classList.toggle("slider__item_active");
}

const slideManagementLeft = () => {
    let slideActive = document.querySelector(".slider__item_active");
    let i = (sliderItems.findIndex(item => item === slideActive));

    sliderItems[i].classList.toggle("slider__item_active");
    let countSlide = --i;

    (countSlide >= 0) ?
    i = countSlide :
    i = sliderItems.length  - 1;
    sliderItems[i].classList.toggle("slider__item_active");
}

arrowToRight.onclick = slideManagementRight;
arrowToLeft.onclick = slideManagementLeft;