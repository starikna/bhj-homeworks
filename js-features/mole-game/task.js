'use strict'

const countDead = document.getElementById("dead"); // получаем доступ к счетчику убитых кротов
const countLost = document.getElementById("lost"); // получаем доступ к счетчику промахов



getHole = index => document.getElementById(`hole${index}`); // функция доступа  к индексу каждой лунки

for (index = 1; index < 10; index++) {
   let hole = getHole(index);

    hole.onclick = function() {
        if (hole.className.includes( 'hole_has-mole' )) {
            countDead.textContent++;
        } else {
            countLost.textContent++;
        }
    }
}

if (countDead.textContent === '10') {
    playing = false;
    alert ("Вы победили!");
    countDead.textContent === "0";
    countLost.textContent === "0";
} else if (lost.textContent === '5') {
    playing = false;
    alert ("Вы проиграли!"); 
    countDead.textContent === "0";
    countLost.textContent === "0";
}
