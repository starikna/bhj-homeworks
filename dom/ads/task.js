const rotator = document.querySelectorAll(".rotator__case");
console.log(rotator);
rotator.forEach((el) => {
function changeRotator () {
    el.classList.toggle("rotator__case_active")
}
});