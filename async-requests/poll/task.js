const requestAddress = "https://students.netoservices.ru/nestjs-backend/poll";
const activePoll = document.querySelector(".poll__answers_active");
const titleField = document.querySelector(".poll__title");


let xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState === xhr.DONE) {
        const title = JSON.parse(xhr.responseText).data.title;
        const answers = JSON.parse(xhr.responseText).data.answers;    
        titleField.textContent = String(title);

        createButton(answers);
    }
});

xhr.open("GET", requestAddress);
xhr.responseType = "text";
xhr.send();

function createButton (answersList) {
    for (const key in answersList) {
        const element = answersList[key];
        const answerButton = document.createElement("button");
        answerButton.classList.add("poll__answer");
        answerButton.textContent = element;
        activePoll.appendChild(answerButton);

        answerButton.addEventListener("click", (e) => {
            alert("Спасибо, ваш голос засчитан!");
        });
    }
}