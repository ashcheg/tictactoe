// Game controler module
// const displayController = ({

//     return: {
//         // need to write functions
//         score: checkScore(),
//         resetGame: resetGame(),
//         choosePlayer: choosePlayer()
//     }
// })();



// All event listeners. Need to atach to elements
// restartBtn.addEventListener("click", displayController.restartGame);
// signBtn.addEventListener("click", displayController.choosePlayer);


// Gameboard module
const Gameboard = (() => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];

    // elements
    // Choosign player sign
    // const signBtn = document.getElementsByClassName("player-sign");
    // const restartBtn = document.getElementById("restart");
       
    blah = "cell1"
    

    // function to add amrk on the Gameboard
    function addMark(blah) {
        console.log(blah);
        const cellID = blah;
        const cell= document.getElementById(`${cellID}`);
        
        cell.innerHTML = 'X';
    }

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
        addMark: addMark(blah)
    }
})();


const cells = document.getElementsByClassName("cell"); 
for (cell in cells) {
    cell.addEventListener("click", Gameboard.addMark("cell1"));
}



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




