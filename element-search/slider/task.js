// Для того, чтобы конкретный слайд был активен, у него должен быть класс slider__item_active:
const arrowToLeft = document.querySelector(".slider__arrow_prev");
const arrowToRight = document.querySelector(".slider__arrow_next");
const sliderItems = Array.from(document.querySelectorAll(".slider__items div"));
const lastSliderItem = Array.from(document.querySelectorAll("div .slider__items div:last-child"));
const firstSliderItem = document.querySelector(".slider__item");
let countSlide = 0;

arrowToRight.onclick = function () {
        slideManagementRight();  
}

arrowToLeft.onclick = function () {  
    slideManagementLeft();  
}

const slideManagementRight = () => {
    // const firstSliderItem = document.querySelector(".slider__item");

    for (let i = 0; i < sliderItems.length - 1; i++) {
 
        const slideActive = sliderItems[i];     
        const nextSlideItem = slideActive.nextElementSibling;
    
        if (sliderItems[i].className.includes("slider__item_active")) {
    
        countSlide = [i++];
        slideActive.classList.toggle("slider__item_active");
        nextSlideItem.classList.toggle("slider__item_active");

        countSlide =  [i++];
        return countSlide;
        }
} 
        firstSliderItem.classList.toggle("slider__item_active");
        countSlide = sliderItems.length;
        lastSliderItem[0].classList.toggle("slider__item_active");
        countSlide = 0;
        return(countSlide);
}

const slideManagementLeft = () => {
    for (let i = sliderItems.length - 1; i > 0; i--) {

        if (sliderItems[i].className.includes("slider__item_active")) {
            countSlide = [i];
        const slideActive = sliderItems[i];
        const prevSlideItem = slideActive.previousElementSibling;
    
        prevSlideItem.classList.toggle("slider__item_active");
        slideActive.classList.toggle("slider__item_active");
        countSlide = [i];
        // alert(countSlide);
        return countSlide;
        }  
    }
    lastSliderItem[0].classList.toggle("slider__item_active");
    countSlide = 0;
    firstSliderItem.classList.toggle("slider__item_active");
    countSlide = sliderItems.length;
    return countSlide;



}

// const slideActive = sliderItems[i];     
// const nextSlideItem = slideActive.nextElementSibling;

// if (sliderItems[i].className.includes("slider__item_active")) {

// countSlide = [i++];
// slideActive.classList.toggle("slider__item_active");
// nextSlideItem.classList.toggle("slider__item_active");

// countSlide =  [i++];
// return countSlide;
// }
// } 
// firstSliderItem.classList.toggle("slider__item_active");
// countSlide = sliderItems.length;
// lastSliderItem[0].classList.toggle("slider__item_active");
// countSlide = 0;
// return(countSlide);

   
  
    

// console.log(arrowToLeft);
// console.log(arrowToRight);
// console.log(slider);

// Установите обработчики события click на элементах «Влево» и «Вправо»
// При смене слайдов учитывайте, что навигация должна быть бесконечной. 
// То есть, смена крайнего левого слайда должна перекидывать к крайнему правому и наоборот.
// В решении старайтесь делать разделение кода. Регистрация обработчиков отдельно, управление слайдером отдельно.

// Опирайтесь на свойство length для подсчёта количества слайдов или точек
// При движении вправо и влево, следите, чтобы номер слайда существовал
// Храните номер текцщего слайда в отдельной переменной. Меняйте значение в 
// переменной по смене слайда. По этому значению легко будет найти нужный слайд или активную точку. 
// Задайте начальным значением 0.
// Для проверки на наличие того или иного класса, используйте метод includes: