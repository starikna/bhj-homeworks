const dead = document.getElementById("dead");
const lost = document.getElementById("lost"); 
let countDead = 0;
let countLost = 0;

getHole = index => document.getElementById(`hole${index}`);

for (index = 1; index < 10; index++) {
   let hole = getHole(index);

    hole.onclick = function() {
        if (hole.className.includes( 'hole_has-mole' )) {
            ++countDead;
            dead.textContent = countDead;
        } else {
            ++countLost;
            lost.textContent = countLost;
        }

        if (countDead === 10) {
            alert ("ПОБЕДА!");
            
            countDead = 0;
            countLost= 0;

            dead.textContent = countDead;
            lost.textContent = countLost;
        } else if (countLost === 5) {
            alert ("Вы проиграли!");

            countDead = 0;
            countLost = 0;

            dead.textContent = countDead;
            lost.textContent = countLost;
        }
    }
}