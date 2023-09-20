const bg = document.querySelector('body').style

var light = 'rgb(255, 255, 255)'
var dark = 'rgb(35, 35, 55)'

bg.backgroundColor = localStorage.bg

function l(){
    bg.backgroundColor = light
    localStorage.bg = light
}
function d(){
    bg.backgroundColor = dark
    localStorage.bg = dark
}