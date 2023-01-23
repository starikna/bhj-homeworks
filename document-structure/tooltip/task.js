const hasTooltipLinks = document.querySelectorAll(".has-tooltip");
const toolTipslink = document.querySelectorAll(".tooltip");

hasTooltipLinks.forEach((item) => {
  let toolTips = document.createElement("div");
  item.insertAdjacentElement("afterEnd", toolTips);
  toolTips.className = "tooltip";
  toolTips.textContent = item.title;
});

function activatorToolTips() {
  let tooltipActive = document.querySelectorAll(".tooltip_active");
  tooltipActive.forEach((el) => {
    el.classList.add("tooltip_active");
  });
}

hasTooltipLinks.forEach(elem => {
  elem.addEventListener('click', e => {
    e.preventDefault();

    let left = Math.round(e.target.getBoundingClientRect().left);
    let top = Math.round(e.target.getBoundingClientRect().bottom);
    elem.nextElementSibling.setAttribute("style", `left: ${left + `px`}; top: ${top + `px`}`);

    let currentTool = elem.nextElementSibling;
    activatorToolTips();

    currentTool.classList.toggle('tooltip_active');
  });
});

window.addEventListener('scroll', function() {
  activatorToolTips();
});