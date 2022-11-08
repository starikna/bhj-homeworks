'use strict'
const clickerCookie = document.getElementById("cookie");
const countClick = document.getElementById("clicker__counter");

clickerCookie.onclick = function() {
if(countClick.textContent < 40 && +countClick.textContent % 2 !== 0) {
    clickerCookie.width = 200;
    clickerCookie.height = 128;
    return countClick.textContent++;
} else if (countClick.textContent < 40 && countClick.textContent % 2 === 0) {
    clickerCookie.width = 180;
    clickerCookie.height = 115.2;
     return countClick.textContent++;
} else {
   return countClick.textContent = 0; 
};
}