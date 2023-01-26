'use strict';

let randomNumber = Math.floor(Math.random() * 100) + 1;

let score = 6;
let highscore = 0;

// show stored high score in localStorage
const storedHighscore = localStorage.getItem('highscore');

if (storedHighscore !== null) {
    document.querySelector('.highscore').textContent = storedHighscore;
}


document.querySelector('.check').addEventListener('click', function () {

    let userGuess = Number(document.querySelector('.guess').value);

    document.querySelector('.guess').value = '';
    document.querySelector('.message').style.color = 'yellow';
    document.querySelector('.last-guess').textContent = userGuess;

    // when there's no input
    if (!userGuess) {
        document.querySelector('.message').textContent = 'No Number Input!';
        document.querySelector('.last-guess').textContent = '__';
    }

    // when the input is out of limit
    else if (userGuess > 100 || userGuess < 0) {
        document.querySelector('.message').textContent = 'Number must be between 0-100!';
    }

    // when the input is wrong
    else if (userGuess !== randomNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = userGuess > randomNumber ? 'that\'s high' : 'that\'s low';
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.score').style.color = 'yellow';
        } else {
            document.querySelector('.message').textContent = 'defeat!';
            score = 0
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').textContent = randomNumber;
            document.querySelector('.message').style.color = '';
            document.querySelector('.score').style.color = '';

        }

    }
    // when the input is right
    else {
        document.querySelector('.message').textContent = 'victory!';
        document.querySelector('.message').style.color = '';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.score').style.color = '';

        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
            // store the highscore to local storage
            localStorage.setItem('highscore', score);
        }

    }

});

// reset everything except the highscore when the start-over button is clicked
document.querySelector('.start-over').addEventListener('click', function () {

    score = 6;
    randomNumber = Math.floor(Math.random() * 100) + 1;

    document.querySelector('.message').textContent = 'start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.last-guess').textContent = '__';
})
