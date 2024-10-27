document.addEventListener('DOMContentLoaded', function(){
    const loadBoard = Array.from(document.querySelectorAll('div'));
    const specificSquare = loadBoard.slice(3, 12);
    
    const whichPlay = Array(9).fill(null);
    let thisPlayer = 'O';

    specificSquare.forEach((square) => {
        square.classList.add('square');
        square.addEventListener('click', squareClicked);
    });

    function squareClicked(event){
        const square = event.target;
        const position = Array.from(specificSquare).indexOf(square);

        if (whichPlay[position] !== null) return;
        square.textContent = thisPlayer;
        square.classList.add(thisPlayer);

        whichPlay[position] = thisPlayer;
        thisPlayer = thisPlayer === 'O' ? 'X' : 'O';
    }

    









});