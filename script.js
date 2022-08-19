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
        if (gameBoardDiv.classList.contains("active")) {
            if (event.target.innerHTML == "") {
                let cellID = event.target.getAttribute('id');
                sign = displayController.playerSign;
                addMark(cellID, sign);
                checkWin();
                // change sign of the player after every turn
                (displayController.playerSign == "x") ? displayController.playerSign = "o" : displayController.playerSign = "x";
            }
        } else {
            alert("choose your player sign");
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

    function resetBoard() {
        for (i=0; i<=(gameBoard.length-1); i++) {
            gameBoard[i] = "";
        }
        gameBoardDiv.classList.remove("active");
        render();
    }

    return {
        render: render(),
        addMark: addMark,
        checkWin: checkWin,
        resetBoard: resetBoard
    }

})();

const playerFactory = (playerSign, playerName) => {
    return {
        playerSign,
        playerName
    }
}

const displayController = (() => {
    let playerSign = "x";
    const xPlayer = document.getElementById("xPlayer");
    const oPlayer = document.getElementById("oPlayer");
    const gameboard = document.getElementById("game-board");

    // player mode switch
    function signSwitch(sign) {
        displayController.playerSign = sign;
    }

    // enter round mode (can't alter signs;gameboard is active)
    function startRound() {
        xPlayer.classList.remove("active");
        oPlayer.classList.remove("active");
        xPlayer.classList.add("inactive");
        oPlayer.classList.add("inactive");
        gameboard.classList.add("active");
        gameboard.classList.remove("inactive");
    }

    xPlayer.addEventListener("click", function() {
        if (xPlayer.classList.contains("active")) {
            signSwitch("x");
            startRound();
        } else {
            alert("you can't change sign in the middle of the game");
        }
    });

    oPlayer.addEventListener("click", function() {
        if (oPlayer.classList.contains("active")) {
            signSwitch("o");
            startRound();
        }
        else {
            alert("you can't change sign in the middle of the game");
        }
    });

    // restart game
    const restartBtn = document.getElementById("restart");
    restartBtn.addEventListener("click", function() {
        Gameboard.resetBoard();
        xPlayer.classList.add("active");
        oPlayer.classList.add("active");
        xPlayer.classList.remove("inactive");
        oPlayer.classList.remove("inactive");
        gameboard.classList.remove("active");
        gameboard.classList.add("inactive");
    });
    

    return {
        signSwitch: signSwitch,
        playerSign: playerSign
    }
    

    // create players with names
    // const playerOne = playerFactory("x");
    // const playerTwo = playerFactory("o");
})();
