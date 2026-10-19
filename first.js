const maxInput = document.getElementById('maxNumber');
const guessInput = document.getElementById('guessInput');
const startBtn = document.getElementById('startBtn');
const guessBtn = document.getElementById('guessBtn');
const quitBtn = document.getElementById('quitBtn');
const guessSection = document.getElementById('guessSection');
const messageBox = document.getElementById('message');

let randomNumber = null;

function showMessage(text) {
    messageBox.textContent = text;
}

function startGame() {
    const max = Number(maxInput.value);

    if (!max || max <= 1) {
        showMessage('Please enter a valid number greater than 1.');
        return;
    }

    randomNumber = Math.floor(Math.random() * max) + 1;
    guessSection.style.display = 'block';
    guessInput.value = '';
    guessInput.focus();
    showMessage('Game started! Try to guess the number.');
}

function checkGuess() {
    if (randomNumber === null) {
        showMessage('Start a game first.');
        return;
    }

    const guess = Number(guessInput.value);

    if (!guess) {
        showMessage('Please enter a valid number.');
        return;
    }

    if (guess === randomNumber) {
        showMessage('Congratulations! You guessed it right.');
        guessSection.style.display = 'none';
        randomNumber = null;
        return;
    }

    if (guess < randomNumber) {
        showMessage('Too low! Try again.');
    } else {
        showMessage('Too high! Try again.');
    }

    guessInput.value = '';
    guessInput.focus();
}

function quitGame() {
    randomNumber = null;
    guessSection.style.display = 'none';
    showMessage('You quit the game. Press Start Game to play again.');
}

if (startBtn) {
    startBtn.addEventListener('click', startGame);
}

if (guessBtn) {
    guessBtn.addEventListener('click', checkGuess);
}

if (quitBtn) {
    quitBtn.addEventListener('click', quitGame);
}

if (guessInput) {
    guessInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            checkGuess();
        }
    });
}
