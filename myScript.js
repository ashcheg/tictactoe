// Game controler module
// const displayController = ({

//     return: {
//         // need to write functions
//         
//         score: checkScore(),
//         resetGame: resetGame(),
//         addPlayer: addPlayer()
//     }
// })();


// Gameboard module
const Gameboard = (() => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];

    // elements
    // Choosign player sign
    // const signBtn = document.getElementsByClassName("player-sign");
    // const restartBtn = document.getElementById("restart");
       
    
    // function to add mark on the Gameboard
    function addMark() {
        blah = "cell1"
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
        addMark: addMark()
    }
})();


const cells = document.getElementsByClassName("cell"); 
for (cell in cells) {
    cell.addEventListener("click", Gameboard.addMark("cell1"));
}

// All event listeners. Need to atach to elements
// restartBtn.addEventListener("click", displayController.restartGame);
// signBtn.addEventListener("click", displayController.choosePlayer);

// Player object - factory function
// display name input

const playerFactory = (playerName, signValue) => {
    return { playerName, signValue }
}; 


function addSign(e) {

}




