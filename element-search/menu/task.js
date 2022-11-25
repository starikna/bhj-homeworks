const link = Array.from(document.querySelectorAll(".menu__link"));

link.find((el) => {
  const next = el.nextElementSibling;
  if(next !== null) {
    el.onclick = function () {
      next.classList.toggle("menu_active");

      return false;
    }  
  }
});