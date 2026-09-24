function init() {
    console.log('Script Successfully loaded.')
    console.log('Window width : ' + window.innerWidth)
    console.log('Window height : ' + window.innerHeight)
}


// Window size variables
let HEIGHT = window.innerHeight
let WIDTH = window.innerWidth

// Game constants
const game = document.getElementById("gameCanvas");


// Window size info function
function getWindowSize() {
    HEIGHT = window.innerHeight
    WIDTH = window.innerWidth
    console.log('New windows info : ' + HEIGHT + " / " + WIDTH)
}

// Window resizing function
function resize() {
    game.style.height = HEIGHT
    game.style.width = WIDTH
}