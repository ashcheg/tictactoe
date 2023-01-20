// Gameboard module
const Gameboard = (() => {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameBoardDiv = document.getElementById("game-board");
    let countTurns = 0

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
        cellNumber = cellID.substring((cellID.length-1));
        gameBoard[cellNumber] = sign;
        render();
        if (sign === "x") {
            displayController.chosenSign.innerHTML= `O's turn`;
        } else {
            displayController.chosenSign.innerHTML= `X's turn`;
        }
    }

    gameBoardDiv.addEventListener("click", function(event){
        if (gameBoardDiv.classList.contains("active")) {
            countTurns += 1;
            if (event.target.innerHTML == "") {
                let cellID = event.target.getAttribute('id');
                sign = displayController.playerSign;
                addMark(cellID, sign);
                checkWin();
                // change sign of the player after every turn
                (displayController.playerSign == "x") ? displayController.playerSign = "o" : displayController.playerSign = "x";
            }
        } else {
            alert("choose your player's sign");
        }
        
    });

    function announceWin(winner) {
        displayController.showPopup(winner);
        displayController.stopRound();
    }

    function checkWin() {
        // 1 2 3
        if ((gameBoard[0] === gameBoard[1]) && (gameBoard[0]=== gameBoard[2]) && !(gameBoard[0]=="")) {
            (gameBoard[0]=="x") ? announceWin("X"): announceWin("O");
        }
        // 4 5 6 
        if ((gameBoard[3] === gameBoard[4]) && (gameBoard[3]=== gameBoard[5]) && !(gameBoard[3]=="")) {
            (gameBoard[3]=="x") ? announceWin("X"): announceWin("O");
        }
        // 7 8 9
        if ((gameBoard[6] === gameBoard[7]) && (gameBoard[6]=== gameBoard[8]) && !(gameBoard[6]=="")) {
            (gameBoard[6]=="x") ? announceWin("X"): announceWin("O");
        }
        // 1 4 7
        if ((gameBoard[0] === gameBoard[3]) && (gameBoard[0]=== gameBoard[6]) && !(gameBoard[0]=="")) {
            (gameBoard[0]=="x") ? announceWin("X"): announceWin("O");
        }
        // 2 5 8
        if ((gameBoard[1] === gameBoard[4]) && (gameBoard[1]=== gameBoard[7]) && !(gameBoard[1]=="")) {
            (gameBoard[1]=="x") ? announceWin("X"): announceWin("O");
        }
        // 3 6 9
        if ((gameBoard[2] === gameBoard[5]) && (gameBoard[2]=== gameBoard[8]) && !(gameBoard[2]=="")) {
            (gameBoard[2]=="x") ? announceWin("X"): announceWin("O");
        }

        // 1 5 9
        if ((gameBoard[0] === gameBoard[4]) && (gameBoard[0]=== gameBoard[8]) && !(gameBoard[0]=="")) {
            (gameBoard[0]=="x") ? announceWin("X"): announceWin("O");
        }

        // 3 5 7
        if ((gameBoard[2] === gameBoard[4]) && (gameBoard[2]=== gameBoard[6]) && !(gameBoard[2]=="")) {
            (gameBoard[2]=="x") ? announceWin("X"): announceWin("O");
        }
        if (countTurns === 9) {
            announceWin("draw");
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
    const chosenSign = document.getElementById("choosing");
    const xPlayer = document.getElementById("xPlayer");
    const oPlayer = document.getElementById("oPlayer");
    const gameboard = document.getElementById("game-board");
    // congratulating winner popup
    const popup = document.getElementById("winnerPopup");

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
        chosenSign.innerHTML= `${displayController.playerSign}'s turn`;
    }

    function stopRound() {
        gameboard.classList.remove("active");
        gameboard.classList.add("inactive");
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

    function restartGame() {
        Gameboard.resetBoard();
        stopRound();
        xPlayer.classList.add("active");
        oPlayer.classList.add("active");
        xPlayer.classList.remove("inactive");
        oPlayer.classList.remove("inactive");
        chosenSign.classList.remove("hidden");
        popup.classList.remove("show");
    }

    restartBtn.addEventListener("click", restartGame);

    function showPopup(winner) {
        if (winner === "draw") {
            popup.innerHTML = `It's a draw!`;
        } else {
            popup.innerHTML = `Congratulations ${winner} wins!`;
        }
        popup.classList.add("show");
        chosenSign.innerHTML = '';
    };
    
    return {
        chosenSign: chosenSign,
        signSwitch: signSwitch,
        playerSign: playerSign,
        stopRound: stopRound,
        showPopup: showPopup
    }
})();

// add styling to congratulations popup
// add more styling to inactive elements
// add new game button to congratulations button

// create players with names
// const playerOne = playerFactory("x", nameX);
// const playerTwo = playerFactory("o", nameO);

// think about logic of multiple rounds
// accumulating score inside created players

