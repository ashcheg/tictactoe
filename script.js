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
            checkWin();
            // change sign of the player
            (displayController.playerSign == "x") ? displayController.playerSign = "o" : displayController.playerSign = "x";
        }
    });

    function checkWin() {
        // 1 2 3
        if ((gameBoard[0] === gameBoard[1]) && (gameBoard[0]=== gameBoard[2]) && !(gameBoard[0]=="")) {
            message = (gameBoard[0]=="x") ? "X wins!":"O wins!"
            console.log(message)
        }
        // 4 5 6 
        if ((gameBoard[3] === gameBoard[4]) && (gameBoard[3]=== gameBoard[5]) && !(gameBoard[3]=="")) {
            message = (gameBoard[3]=="x") ? "X wins!":"O wins!"
            console.log(message)
        }
        // 7 8 9
        if ((gameBoard[6] === gameBoard[7]) && (gameBoard[6]=== gameBoard[8]) && !(gameBoard[6]=="")) {
            message = (gameBoard[6]=="x") ? "X wins!":"O wins!"
            console.log(message)
        }
        // 1 4 7
        if ((gameBoard[0] === gameBoard[3]) && (gameBoard[0]=== gameBoard[6]) && !(gameBoard[0]=="")) {
            message = (gameBoard[0]=="x") ? "X wins!":"O wins!"
            console.log(message)
        }
        // 2 5 8
        if ((gameBoard[1] === gameBoard[4]) && (gameBoard[1]=== gameBoard[7]) && !(gameBoard[1]=="")) {
            message = (gameBoard[1]=="x") ? "X wins!":"O wins!"
            console.log(message)
        }
        // 3 6 9
        if ((gameBoard[2] === gameBoard[5]) && (gameBoard[2]=== gameBoard[8]) && !(gameBoard[2]=="")) {
            message = (gameBoard[2]=="x") ? "X wins!":"O wins!"
            console.log(message)
        }

        // 1 5 9
        if ((gameBoard[0] === gameBoard[4]) && (gameBoard[0]=== gameBoard[8]) && !(gameBoard[0]=="")) {
            message = (gameBoard[0]=="x") ? "X wins!":"O wins!"
            console.log(message)
        }

        // 3 5 7
        if ((gameBoard[2] === gameBoard[4]) && (gameBoard[2]=== gameBoard[6]) && !(gameBoard[2]=="")) {
            message = (gameBoard[2]=="x") ? "X wins!":"O wins!"
            console.log(message)
        }
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
