let thisPlayer = 'O';
const whichPlay = Array(9).fill(null);
const whoWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

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

function winner(){
    return whoWins.some(win => {
        const [x, y, z] = win;
        return whichPlay[x] && whichPlay[x] === whichPlay[y] && whichPlay[x] === whichPlay[z]
    })
}

function gameResults(){
    const statusIndex = document.getElementById('status');
    statusIndex.textContent = 'Congratulations! ${winner} is the Winner!';
    statusIndex.classList.add('you-won');
}

function squareClicked(square, position){
    if (!whichPlay[position]){
        whichPlay[position] = thisPlayer;
        square.textContent = thisPlayer;
        square.classList.add(thisPlayer);

        if (winner() === True){
            gameResults(thisPlayer);
        }
        else{
            thisPlayer = thisPlayer === 'O' ? 'x' : 'O';
        } 
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
