document.addEventListener('DOMContentLoaded', function(){
    const loadBoard = Array.from(document.querySelectorAll('div'));
    const specificSquare = loadBoard.slice(3, 12);

    specificSquare.forEach((square) => {
        square.classList.add('square');
    });

    











});