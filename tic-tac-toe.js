let thisPlayer = 'O';
const whichPlay = Array(9).fill(null);


window.addEventListener('DOMContentLoaded', () => {
    let game = document.getElementById('game');

    if (game){
        const squares = game.querySelectorAll('div');
        squares.forEach((square, position) => {
            square.classList.add('square');

            square.addEventListener('click', () => squareClicked(square, position));
            square.addEventListener('mouseover', () => whenHovering(square));
            square.addEventListener('mouseout', () => notHovering(square));
        });
    }
}
);

function squareClicked(square, position){
    if (!whichPlay[position]){
        whichPlay[position] = thisPlayer;
        square.textContent = thisPlayer;
        square.classList.add(thisPlayer);

        thisPlayer = thisPlayer === 'O' ? 'x' : 'O';
    }
}

function whenHovering(square){
    if (!square.textContent){
        square.classList.add('hover');
    }
}

function notHovering(square){
    square.classList.remove('hover');
}
