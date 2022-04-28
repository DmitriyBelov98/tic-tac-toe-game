// массив для отслеживания игровых полей
const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
// переменная для текущего раунда
let currentRound = 1;
// переменная для id игрока
let editedPlayer = 0;
// переменная для текущего игрока
let activePlayer = 0;
let gameIsOver = false;
// массив для динамического отображения игрока

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');


const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById('start-game-btn');
// const gameFiledElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener('click', startNewGame);

// for (const gameFiledElement of gameFiledElements) {
//     gameFiledElement.addEventListener('click', selectGameField);
// }

gameBoardElement.addEventListener('click', selectGameField)
