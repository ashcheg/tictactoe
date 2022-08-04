// Gameboard module
const Gameboard = (() => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameBoardDiv = document.getElementById("game-board");

    // show Gameboard on the page
    function render() {
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
        console.log(cellNumber);
    }

    gameBoardDiv.addEventListener("click", function(event){
        addMark(event.target.getAttribute('id'));
    });

    return {
        render: render(),
        // need to write functions
        addMark: addMark
    }
})();

//add event listeners to the board

/*
let gameboard = document.getElementById("game-board");
gameboard.addEventListener("click", function(event){
    console.log(event.target.getAttribute('id'));
});

let cells = document.querySelectorAll('.cell');
cells.forEach(item => {
    item.addEventListener('click', console.log('hi'))
});
*/

//Gameboard.addMark(item.getAttribute('id'))