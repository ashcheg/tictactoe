// Gameboard module
const Gameboard = (() => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameBoardDiv = document.getElementById("game-board");

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
    
    return {
        render: render(),
        addMark: addMark
    }
})();

const displayController = (() => {
    let playerSign = "x";
    //player mode switch
    function signSwitch(sign) {
        playerSign = sign;
        console.log(playerSign);
    }

    // playerButtons.forEach(btn => btn.addEventListener("click", signSwitch(btn.getAttribute("id"))));

    const xPlayer = document.getElementById("xPlayer");
    const oPlayer = document.getElementById("oPlayer");

    xPlayer.addEventListener("click", function() {
        signSwitch("x")
    });

    oPlayer.addEventListener("click", function() {
        signSwitch("o")
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

const playerFactory = (playerSign) => {
    return {
        playerSign
    }
}



//add event listeners to the board

/*

*/
