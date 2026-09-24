// Game constants
const game = document.getElementById("gameCanvas");
const ctx = game.getContext("2d")

// Global variables
let HEIGHT
let WIDTH
let posX = 10
let posY = 10
let movementX = 0
let movementY = 0
let velocityX = 0
let velocityY = 0


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

// Vehicle moving function
function move() {
    posX = posX + movementX
    posY = posY + movementY
}


// Vehicle key related function
function keyTriggered(key){
    console.log("Key triggered : " + key.key)
         if (key.key == 'z'){movementX = 0, movementY = -1}
    else if (key.key == 's'){movementX = 0, movementY = 1}
    else if (key.key == 'q'){movementX = -1, movementY = 0}
    else if (key.key == 'd'){movementX = 1, movementY = 0}
    else if (key.key == ' '){movementX = 0, movementY = 0}
}


