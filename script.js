// Game constants
// A thing to know is that, velocity Y will be higher.
const game = document.getElementById("gameCanvas");
const ctx = game.getContext("2d")
const maxSteerVelocity = 4
const maxFrontVelocity = 8
const maxBackVelocity = 2

// Global variables
let HEIGHT
let WIDTH
let posX = 300
let posY = 300
let steerMovement = 0
let frontMovement = 0
let steer = 1
let speed = 1


function init() {
    console.log('Script Successfully loaded.')
    console.log('Window width : ' + window.innerWidth)
    console.log('Window height : ' + window.innerHeight)

    window.addEventListener('resize', resize)
    window.addEventListener('keydown', keyTriggered)

    resize()
    gameLoop()
}


// Initiating the canvas - old artifact
//function initCanvas() {
//    ctx.fillStyle = "blue"
//    ctx.fillRect(25, 25, 100, 100);
//    gameLoop()
//}


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


// GAMELOOP Function, this one is kinda important
function gameLoop() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    ctx.fillStyle = "blue"
    ctx.fillRect(posX, posY, 25, 25);
    move()
    requestAnimationFrame(gameLoop)
}

// Vehicle key related function
function keyTriggered(key) {

}

// Vehicle moving function
function move() {

}

