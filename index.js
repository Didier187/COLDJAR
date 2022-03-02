// javascript
let mouseClickLocations = [];
let mousePositions = [];
const body = document.getElementById("body");

window.addEventListener("click", function (e) {
    mouseClickLocations.push({ x: e.clientX, y: e.clientY });
});
window.addEventListener("mousemove", function (e) {
    mousePositions.push({ x: e.clientX, y: e.clientY });
});

document.getElementById("vis-clicks").addEventListener("click", () => {
  if (mouseClickLocations.length) {
    plot(mouseClickLocations);
    body.innerHTML = htmlElements.join("");
  }
});

document.getElementById("vis-nav-path").addEventListener("click", () => {
  if (mousePositions.length) {
    plot(mousePositions);
  }
});

const plot = (data) => {
  let htmlElements = data.map(
    (position) => `
       <span style="left:${position.x}px; top:${position.y}px" class="dot"></span>
       `
  );
  body.innerHTML = htmlElements.join("");
};
