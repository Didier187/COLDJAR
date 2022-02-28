// javascript
 let mouse_positions =[]
 let scroll_positions = []
 const body = document.getElementById("body")

window.addEventListener("click",function(e){
    mouse_positions.push({x:e.clientX, y:e.clientY})
})
window.addEventListener("mousemove",function(e){
    scroll_positions.push({x:e.clientX, y:e.clientY})
})

document.getElementById("vis-clicks").addEventListener("click",()=>{
    if(mouse_positions.length){
       let htmlElements = mouse_positions.map((position) => `
       <span style="left:${position.x}px; top:${position.y}px" class="dot"></span>
       `)
      body.innerHTML = htmlElements.join("")
    }
})
document.getElementById("vis-nav-path").addEventListener("click",()=>{
    if(scroll_positions.length){
       
       let htmlElements = scroll_positions.map((position) => `
       <span style="left:${position.x}px; top:${position.y}px" class="dot"></span>
       `)
      body.innerHTML = htmlElements.join("") 
    }
})
