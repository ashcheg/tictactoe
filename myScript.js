

const Gameboard = (() => {
    gameBoard = ['O', 'O', 'X', 'O', 'O', 'X', 'O', 'O', 'X'];

    // render gameboard on screen
    function render() {
        gameBoardDiv = document.getElementById("game-board");
        for (i=0;i<gameBoard.length;i++) {
            let sign = gameBoard[i];
            let div = document.createElement("div");
            div.id = `cell${i}`
            div.innerHTML = sign;
            gameBoardDiv.appendChild(div);
        }
    }
    return {
        render: render()
    }
})();

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




