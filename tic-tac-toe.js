window.addEventListener('DOMContentLoaded', () => {
    let game = document.getElementById('game');

    if (game){
        const squares = game.querySelectorAll('div');
        squares.forEach(square => {
            square.classList.add('square');
        });
    }
}
);