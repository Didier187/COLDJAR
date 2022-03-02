// javascript
<<<<<<< HEAD
let mouseClickLocations = [];
let mousePositions = [];
const body = document.getElementById("body");
=======
 let mouse_positions =[]
 let scroll_positions = []
 const body = document.getElementById("body")

window.addEventListener("click",function(e){
    mouse_positions.push({x:e.clientX, y:e.clientY})
})
window.addEventListener("mousemove",function(e){
    scroll_positions.push({x:e.clientX, y:e.clientY})
})
>>>>>>> 3c12550067d669587689d3be5ceb939618df7a70

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
<<<<<<< HEAD
       `
  );
  body.innerHTML = htmlElements.join("");
};
=======
       `)
      body.innerHTML = htmlElements.join("") 
    }
})
>>>>>>> 3c12550067d669587689d3be5ceb939618df7a70
