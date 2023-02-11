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
        if (sign === "X") {
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
                (displayController.playerSign == "X") ? displayController.playerSign = "O" : displayController.playerSign = "X";
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
            (gameBoard[0]=="X") ? announceWin("X"): announceWin("O");
        }
        // 4 5 6 
        if ((gameBoard[3] === gameBoard[4]) && (gameBoard[3]=== gameBoard[5]) && !(gameBoard[3]=="")) {
            (gameBoard[3]=="X") ? announceWin("X"): announceWin("O");
        }
        // 7 8 9
        if ((gameBoard[6] === gameBoard[7]) && (gameBoard[6]=== gameBoard[8]) && !(gameBoard[6]=="")) {
            (gameBoard[6]=="X") ? announceWin("X"): announceWin("O");
        }
        // 1 4 7
        if ((gameBoard[0] === gameBoard[3]) && (gameBoard[0]=== gameBoard[6]) && !(gameBoard[0]=="")) {
            (gameBoard[0]=="X") ? announceWin("X"): announceWin("O");
        }
        // 2 5 8
        if ((gameBoard[1] === gameBoard[4]) && (gameBoard[1]=== gameBoard[7]) && !(gameBoard[1]=="")) {
            (gameBoard[1]=="X") ? announceWin("X"): announceWin("O");
        }
        // 3 6 9
        if ((gameBoard[2] === gameBoard[5]) && (gameBoard[2]=== gameBoard[8]) && !(gameBoard[2]=="")) {
            (gameBoard[2]=="X") ? announceWin("X"): announceWin("O");
        }

        // 1 5 9
        if ((gameBoard[0] === gameBoard[4]) && (gameBoard[0]=== gameBoard[8]) && !(gameBoard[0]=="")) {
            (gameBoard[0]=="X") ? announceWin("X"): announceWin("O");
        }

        // 3 5 7
        if ((gameBoard[2] === gameBoard[4]) && (gameBoard[2]=== gameBoard[6]) && !(gameBoard[2]=="")) {
            (gameBoard[2]=="X") ? announceWin("X"): announceWin("O");
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
        countTurns = 0;
        /*displayController.chosenSign.innerHTML = "";*/
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
    let playerSign = "X";

    let playerX = document.getElementById('playerX');
    let playerO = document.getElementById('playerO');
    let playerNames = document.getElementById('player-names')
    playerNames.addEventListener('submit', (e) => {
        e.preventDefault();
        if (playerX.value == '' || playerO.value == '') {
            alert('Please enter both of players names')
        } else {
            startRound();
            playerSign = "X";
        }
    })

    
    const chosenSign = document.getElementById("choosing");
    const xPlayer = document.getElementById("xPlayer");
    const oPlayer = document.getElementById("oPlayer");
    const gameboard = document.getElementById("game-board");
    // congratulating winner popup
    const popup = document.getElementById("winner-container");
    const message  = document.getElementById("winner-message");

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
        chosenSign.innerHTML= `${playerSign}'s turn`;
    }

    function stopRound() {
        gameboard.classList.remove("active");
        gameboard.classList.add("inactive");
    }

    xPlayer.addEventListener("click", function() {
        if (xPlayer.classList.contains("active")) {
            signSwitch("X");
            startRound();
        } else {
            alert("you can't change sign in the middle of the game");
        }
    });

    oPlayer.addEventListener("click", function() {
        if (oPlayer.classList.contains("active")) {
            signSwitch("O");
            startRound();
        }
        else {
            alert("you can't change sign in the middle of the game");
        }
    });

    // restart game
    const restartBtn = document.getElementById("restart");
    const newGame = document.getElementById("new-game");

    function restartGame() {
        Gameboard.resetBoard();
        stopRound();
        xPlayer.classList.add("active");
        oPlayer.classList.add("active");
        xPlayer.classList.remove("inactive");
        oPlayer.classList.remove("inactive");
        chosenSign.classList.remove("hidden");
        popup.classList.add("hidden");
        popup.classList.remove('visible');
        chosenSign.innerHTML= `Choose a player`;
        playerX.value = '';
        playerO.value = '';
    }

    restartBtn.addEventListener("click", restartGame);
    newGame.addEventListener("click", restartGame);

    function showPopup(winner) {
        if (winner === "draw") {
            message.innerHTML = `It's a draw!`;
        } else {
            message.innerHTML = `Congratulations, ${winner} wins!`;
        }
        popup.classList.remove("hidden");
        popup.classList.add('visible');
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

// create players with names
// const playerOne = playerFactory("X", nameX);
// const playerTwo = playerFactory("O", nameO);

// create form for names
// ask to choose sign after the game has started (Player1 chooses X, then Player2 chooses O)
// Submit button will be Start Game button

// think about logic of multiple rounds
// accumulating score inside created players

// make Restart game button not active at the beginning
// create stages : Sart a game -> enter both names -> choose sign -> Start first round -> show scoreboard -> other rounds -> show winner and scoreboard -> restart game button



// Make AI palyer
