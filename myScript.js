// Game controler module
const displayController = ({

    return {
        // need to write functions
        score: checkScore(),
        resetGame: resetGame(),
        choosePlayer: choosePlayer()
    }
})();

// Gameboard module
const Gameboard = (() => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];

    // render gameboard on screen
    function render() {
        gameBoardDiv = document.getElementById("game-board");
        for (i=0;i<gameBoard.length;i++) {
            let sign = gameBoard[i];
            let div = document.createElement("div");
            div.classList = "cell"
            div.id = `cell${i}`
            div.innerHTML = sign;
            gameBoardDiv.appendChild(div);
        }
    }
    return {
        render: render(),
        // need to write functions
        addMark: addMark()
    }
})();


// All event listeners. Need to atach to elements
document.addEventListener("click", displayController.resetGame);
document.addEventListener("click", displayController.choosePlayer);
document.addEventListener("click", Gameboard.addMark);

// Overall Game object - module
/* 
    render()
    resetGame()
*/

// Gameboard object - module
/*(function gameBoard() {
    listen for clicks (player, clickedElement)
    
}
)()
*/

// Player object - factory function
/* 
display name input
addMark()
    check if there is a mark already
    render()

*/




