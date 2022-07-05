gameBoard = ['O', 'O', 'X', 'O', 'O', 'X', 'O', 'O', 'X']

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


// render gameboard on screen
function render(gameBoard) {
    gameBoardDiv = document.getElementById("game-board");
    for (i=0;i<gameBoard.length;i++) {
        let sign = gameBoard[i];
        let div = document.createElement("div");
        div.innerHTML = sign;
        gameBoardDiv.appendChild(div);
    }
}

render(gameBoard);