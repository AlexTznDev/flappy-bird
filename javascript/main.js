 // * GLOBAL VARIABLES
const startBtnDOM =  document.querySelector("#start-btn");
const canvas = document.querySelector("#my-canvas");
const startScreenDOM = document.querySelector("#splash-screen");
const ctx = canvas.getContext("2d")
const gameOverScrreenDOM = document.querySelector("#gameover-screen")
let game;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
    console.log("jijiji")
    // 1. cambiar la pantalla
    startScreenDOM.style.display = "none";
    canvas.style.display = "block"
    // 2. crear un objeto de la clase Game
    game = new Game()

    // 3. iniciar el juego (el game loop)
    game.gameLoop()
    

}
// * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame);
window.addEventListener("keydown", (event) => {
    if(event.code === "Space"){
        game.pollito.jumpPollito()
    }
})

