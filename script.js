// Gameboard module
const Gameboard = (() => {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameBoardDiv = document.getElementById("game-board");
    let countTurns = 0

    // show Gameboard on the page
    function render() {
        gameBoardDiv.innerHTML = "";
        for (i=0;i<gameBoard.length;i++) {
            let div = document.createElement("div");
            div.classList = "cell"
            div.id = `cell${i}`
            div.innerHTML = gameBoard[i];
            gameBoardDiv.appendChild(div);
        }
    }

    function addMark(cellID, sign) {
        cellNumber = cellID.substring((cellID.length-1));
        gameBoard[cellNumber] = sign;
        render();
        if (sign === "X") {
            oPlayer.classList.remove("hidden");
            xPlayer.classList.add("hidden");
        } else {
            xPlayer.classList.remove("hidden");
            oPlayer.classList.add("hidden");
        }
        // change sign of the player after every turn
        (sign == "X") ? displayController.playerSign = "O" : displayController.playerSign = "X";
    }

    gameBoardDiv.addEventListener("click", function(event){
        if (gameBoardDiv.classList.contains("active")) {
            if (event.target.innerHTML == "") {
                countTurns += 1;
                let cellID = event.target.getAttribute('id');
                sign = displayController.playerSign;
                addMark(cellID, sign);
                checkWin();
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
        // add checking number of wins in player's factory functions

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
    let wins = 0;
    const getSign = () => playerSign;
    const getName = () => playerName;
    const addWin = () => wins++;
    const getWin = () => wins;
    return {getSign, getName, getWin, addWin}
}

const displayController = (() => {
    let playerSign = "X";

    let playerX = document.getElementById('playerX');
    let playerO = document.getElementById('playerO');
    let playerNames = document.getElementById('player-names')
    playerNames.addEventListener('submit', (e) => {
        e.preventDefault();
        if (playerX.value == '' || playerO.value == '') {
            alert('Please enter names of players')
        } else {
            startRound();
        }
    })

    const chosenSign = document.getElementById("choosing");
    const xPlayer = document.getElementById("xPlayer");
    const oPlayer = document.getElementById("oPlayer");
    const gameboard = document.getElementById("game-board");
    // congratulating winner popup
    const popup = document.getElementById("winner-container");
    const message  = document.getElementById("winner-message");
    const startButton = document.getElementById("start-button");
    const welcomeMsg = document.getElementById("welcome");

    

    // player mode switch
    function signSwitch(sign) {
        displayController.playerSign = sign;
    }

    // enter round mode (can't alter signs;gameboard is active)
    function startRound() {
        playerOne = playerFactory("X", playerX);
        playerTwo = playerFactory("O", playerO);
        displayController.playerSign = "X";
        xPlayer.classList.remove("hidden");
        gameboard.classList.add("active");
        gameboard.classList.remove("inactive");
        startButton.classList.add("hidden");
        playerNames.classList.add("hidden");
        restartBtn.classList.remove("hidden");
        welcomeMsg.classList.add("hidden");
        chosenSign.classList.remove("hidden");
    }

    function stopRound() {
        gameboard.classList.remove("active");
        gameboard.classList.add("inactive");
        restartBtn.classList.add("hidden");
    }

    /* xPlayer.addEventListener("click", function() {
        if (xPlayer.classList.contains("active")) {
            signSwitch("X");
            startRound();
        } else {
            alert("you can't change sign in the middle of the game");
        }
    }); */

    /* oPlayer.addEventListener("click", function() {
        if (oPlayer.classList.contains("active")) {
            signSwitch("O");
            startRound();
        }
        else {
            alert("you can't change sign in the middle of the game");
        }
    }); */

    // restart game
    const restartBtn = document.getElementById("restart");
    const newGame = document.getElementById("new-game");
    restartBtn.classList.add("hidden");

    function restartGame() {
        // actions
        Gameboard.resetBoard();
        stopRound();
        // visual elements
        startButton.classList.remove("hidden");
        xPlayer.classList.add("hidden");
        oPlayer.classList.add("hidden");
        popup.classList.add("hidden");
        popup.classList.remove('visible');
        welcomeMsg.classList.remove("hidden");
        playerNames.classList.remove("hidden");
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
        chosenSign.classList.add("hidden");
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

// create players with names
// const playerOne = playerFactory("X", nameX);
// const playerTwo = playerFactory("O", nameO);

// think about logic of multiple rounds
// accumulating score inside created players

// create stages : Sart a game -> enter both names -> Start first round -> show scoreboard -> other rounds -> show winner and scoreboard -> restart game button

// see if signSwitch function still needed

// Make AI palyer
