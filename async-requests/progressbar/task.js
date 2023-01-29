const form = document.querySelector("#form");
const progress = document.querySelector("#progress");
const requestAddress = "https://students.netoservices.ru/nestjs-backend/upload";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const file = e.target.querySelector("#file").files[0];

  upload(file);
});

function upload(file) {
  let xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    progress.value += event.loaded / event.total;
  };

  xhr.open("POST", requestAddress);
  xhr.send(file);
}