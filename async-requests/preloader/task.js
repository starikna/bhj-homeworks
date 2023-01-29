const loader = document.querySelector(".loader")
const items = document.querySelector("#items");
const item = document.querySelector(".item");
const requestAddress = "https://students.netoservices.ru/nestjs-backend/slow-get-courses";

function createValutList(list) {   
    for (const code in list) {
        const valute = list[code];
        const newItem = document.createElement("div");
        newItem.classList.add("item");
        const valuteDiv = items.appendChild(newItem);
        const itemContent = `<div class="item__code">${valute.CharCode}</div><div class="item__value">${valute.Value}</div><div class="item__currency">руб.</div>`;
        valuteDiv.insertAdjacentHTML("afterbegin", itemContent);
        }
}

let xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState === xhr.DONE) {
        const valutes = JSON.parse(xhr.responseText).response.Valute;

        createValutList(valutes);
        deactivateLoader();
    }
})

xhr.open("GET", requestAddress);
xhr.responseType = "text";
xhr.send();

function deactivateLoader() {
    if (loader.classList.contains("loader_active")) {
      loader.classList.remove("loader_active");
    }
  }