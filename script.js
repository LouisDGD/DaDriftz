// Game constants
const game = document.getElementById("gameCanvas");
const ctx = game.getContext("2d")

// Global variables
let HEIGHT
let WIDTH


function init() {
    console.log('Script Successfully loaded.')
    console.log('Window width : ' + window.innerWidth)
    console.log('Window height : ' + window.innerHeight)

    window.addEventListener('resize', resize)

    resize()
    initCanvas()
}


// Initiating the canvas
function initCanvas() {
    ctx.fillStyle = "blue"
    ctx.fillRect(10, 10, 100, 100);
}


// Window size info function
function getWindowSize() {
    HEIGHT = window.innerHeight
    WIDTH = window.innerWidth
    console.log('New windows info : ' + HEIGHT + " / " + WIDTH)
}


// Window resizing function
function resize() {
    getWindowSize()
    game.height = HEIGHT
    game.width = WIDTH
}