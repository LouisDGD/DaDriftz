function init(){
    console.log('Script Successfully loaded.')
    console.log('Window width : ' + window.innerWidth)
    console.log('Window height : ' + window.innerHeight)
}


// Constantes de taille de fenetre
const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

// Constante de jeu
const game = document.getElementById('gameCanvas')


// Fonction pour resize la fenêtre
function resize(){
    game.style.innerHeight=HEIGHT
    game.style.width=WIDTH
}