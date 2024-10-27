document.addEventListener('DOMContentLoaded', function(){
    const loadBoard = Array.from(document.querySelectorAll('div'));
    const specificSquare = loadBoard.slice(3, 12);
    const whichPlay = Array(9).fill(null);
    const divStatus = document.getElementById('status');
    const determineWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const newGame = document.querySelector('.btn');

    let thisPlayer = 'O';
    let whoWins = false;

    //Info for the square class
    specificSquare.forEach((square) => {
        square.classList.add('square');
        square.addEventListener('click', squareClicked);
        square.addEventListener('mouseover', mouseHover);
        square.addEventListener('mouseout', mouseGone);
    });

    function squareClicked(event){
        if (whoWins) return;
        const square = event.target;
        const position = Array.from(specificSquare).indexOf(square);

        if (whichPlay[position] !== null){ 
            return;
        }
        
        square.textContent = thisPlayer;
        square.classList.add(thisPlayer);

        whichPlay[position] = thisPlayer;

        if (determineWinner()){
            whoWins = true;
            divStatus.textContent = `Congratulations! ${thisPlayer} is the Winner!`;
            divStatus.classList.add('you-won');
            return;
        }
        thisPlayer = thisPlayer === 'O' ? 'X' : 'O';
    }

    function mouseHover(event){
        const square = event.target;
        const position = Array.from(specificSquare).indexOf(square);

        if (whichPlay[position] === null){
            square.classList.add('hover');
        }
    }

    function mouseGone(event){
        const square = event.target;
        square.classList.remove('hover');
    }

    function determineWinner(){
        return determineWin.some(possibility => {
            const [x, y, z] = possibility;
            if (whichPlay[x] && whichPlay[x] === whichPlay[y] && whichPlay[x] === whichPlay[z]){
                return true;
            }
            return false;
        });
    }

    function gameRestart(){
        specificSquare.forEach(square => {
            square.textContent = '';
            square.classList.remove('O', 'X');
        });

        whichPlay.fill(null);
        thisPlayer = 'O';
        whoWins = false;

        divStatus.textContent = 'Move your mouse over a square and click to play an X or an O.';
        divStatus.classList.remove('you-won');
    }

    newGame.addEventListener('click', gameRestart);

});