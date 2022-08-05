// Gameboard module
const Gameboard = (() => {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameBoardDiv = document.getElementById("game-board");

    // show Gameboard on the page
    function render() {
        gameBoardDiv.innerHTML = "";
        for (i=0;i<gameBoard.length;i++) {
            let sign = gameBoard[i];
            let div = document.createElement("div");
            div.classList = "cell"
            div.id = `cell${i}`
            div.innerHTML = sign;
            gameBoardDiv.appendChild(div);
        }
    }

    function addMark(cellID, sign) {
        cellNumber = cellID.substr((cellID.length-1));
        gameBoard[cellNumber] = sign;
        render();
    }

    gameBoardDiv.addEventListener("click", function(event){
        if (event.target.innerHTML == "") {
            let cellID = event.target.getAttribute('id');
            sign = displayController.playerSign;
            addMark(cellID, sign);
        }
    });

//     function checkWin(gameBoard) {
//         console.log('lol');
//         // 1 2 3
//         if ((gameBoard[0] === gameBoard[1]) && (gameBoard[0]=== gameBoard[2])) {
//             console.log("win");
//         } else {
//             console.log("lose");
//         }
//         // 4 5 6 
//         // 7 8 9

//         // 1 4 7
//         // 2 5 8
//         // 3 6 9

//         // 1 5 9
//         // 3 5 7
//     }
    
//     return {
//         render: render(),
//         board: gameBoard,
//         addMark: addMark,
//         checkWin: checkWin
//     }

// })();

function checkWin() {
    // 1 2 3
    if ((gameBoard[0] === gameBoard[1]) && (gameBoard[0]=== gameBoard[2])) {
        console.log("win");
    } else {
        console.log("lose");
    }
    // 4 5 6 
    // 7 8 9

    // 1 4 7
    // 2 5 8
    // 3 6 9

    // 1 5 9
    // 3 5 7
}

return {
    render: render(),
    addMark: addMark,
    checkWin: checkWin
}

})();

const playerFactory = (playerSign) => {
    return {
        playerSign
    }
}

const displayController = (() => {
    let playerSign;
    //player mode switch
    function signSwitch(sign) {
        displayController.playerSign = sign;
    }

    // playerButtons.forEach(btn => btn.addEventListener("click", signSwitch(btn.getAttribute("id"))));

    const xPlayer = document.getElementById("xPlayer");
    const oPlayer = document.getElementById("oPlayer");
    const playerOne = playerFactory("x");
    const playerTwo = playerFactory("o");

    xPlayer.addEventListener("click", function() {
        signSwitch("x");
    });

    oPlayer.addEventListener("click", function() {
        signSwitch("o");
    });


    return {
        signSwitch: signSwitch,
        playerSign: playerSign
    }
    //find all buttons
    //create players
    
    //reset game
    //check for win
})();
