// // Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link
const link = Array.from(document.querySelectorAll(".menu__link"));
const menuSub = Array.from(document.querySelectorAll(".menu_sub"));

link.forEach((el) => {
  el.onclick = function () {
     menuSub.find((item) => {
if(el.nextElementSibling === item) {
         item.classList.toggle("menu_active"); 
         return false;  
} 

    });
    return false;   
  } 
//   return false;
});

// console.log(link);
// console.log(item.menuSubALL);
// console.log(menuSub);


// Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active
// Запрещайте переход по ссылке для тех, что имеют вложенное меню. Остальные пункты меню должны
//  без помех переводить пользователя на соответствующие страницы.


// Используемые темы
// Событие click, метод onclick, обработчик события
// Предотвращение действия по умолчанию (return false в обработчике события)
// Метод closest
// Методы querySelector и querySelectorAll
// Метод Array.from() или оператор распространения (spread, «...») для удобной навигации по найденным элементам
// Советы
// С помощью методов closest, querySelector и querySelectorAll вы можете найти все подходящие элементы
// closest позволит найти ближайшего родителя по CSS-селектору
// querySelector позволит найти первый дочерний элемент по CSS-селектору
// querySelectorAll позволит найти все дочерние элемент по CSS-селектору
// Для вложенных меню вы обязаны возвращать false в обработчиках события для предотвращения перехода по ссылке.
// Решение задач
// _____________________________________________________________________________________________________________
