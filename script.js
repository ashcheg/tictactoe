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

    function addMark(cellID) {
        cellNumber = cellID.substr((cellID.length-1));
        gameBoard[cellNumber] = "x";
        render();
    }

    gameBoardDiv.addEventListener("click", function(event){
        if (event.target.innerHTML == "") {
            addMark(event.target.getAttribute('id'));
        }
    });
    

    return {
        render: render(),
        addMark: addMark
    }
})();

//add event listeners to the board

/*

*/
