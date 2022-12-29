const chat = document.querySelector(".chat-widget");
chat.addEventListener("click", () => {
chat.classList.add("chat-widget_active");
});

const botMessages = [
  'Где ваша совесть?',
  'Кто тут?',
  'К сожалению, все операторы сейчас заняты. Не пишите нам больше!',
  'Добрый день! До свидания!',
  'Вы не купили ни одного товара доя того, чтобы так с нами разговаривать!',
  'Мы ничего не будем вам продавать!',
  'К сожалению, все операторы сейчас спят. Напишите нам через 10 лет!',
]

const input = document.querySelector(".chat-widget__input");
const messages = document.querySelector( '.chat-widget__messages' );
const date = new Date();

function time() {
let hours = date.getHours();
let minutes = date.getMinutes();
if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
return `${hours}:${minutes}`;
}

function addMessageClient() {
  messages.innerHTML += `
  <div class="message  message_client">
    <div class="message__time">${time()}</div>
    <div class="message__text">${input.value}</div>
  </div>
`;
}

function addMessageBot() {
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${time()}</div>
    <div class="message__text">${botMessages[Math.floor(Math.random() * (botMessages.length - 1))]}</div>
  </div>`;1
}

input.addEventListener("keyup", (e) => {
  if (input.value.length > 0) {
    if (e.keyCode === 13) { 
      addMessageClient();
      input.value = "";
      addMessageBot();  
    }       
  }   
});