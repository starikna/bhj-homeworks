`use strict`

const reverseTimer = document.getElementById("timer");

const startingPoint = "60";

const getReverseTimer = function () {
if (reverseTimer.textContent === "0") {
    alert("Вы победили в конкурсе");

    return (reverseTimer.textContent = startingPoint);
  } else {
  reverseTimer.textContent--;
  }
}

    setInterval(getReverseTimer, 1000);