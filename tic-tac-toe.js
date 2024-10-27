document.addEventListener('DOMContentLoaded', function(){
    const loadBoard = Array.from(document.querySelectorAll('div'));
    const specificSquare = loadBoard.slice(3, 12);
    
    const whichPlay = Array(9).fill(null);
    let thisPlayer = 'O';

    //Info for the square class
    specificSquare.forEach((square) => {
        square.classList.add('square');
        square.addEventListener('click', squareClicked);
        square.addEventListener('mouseover', mouseHover);
        square.addEventListener('mouseout', mouseGone);
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









});