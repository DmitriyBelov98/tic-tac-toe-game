function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML =
      'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display = 'none';
  
    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        gameData[i][j] = 0;
        const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
        gameBoardItemElement.textContent = '';
        gameBoardItemElement.classList.remove('disabled');
        gameBoardIndex++;
      }
    }
  }

// функция показа игрового поля только когда имена игроков внесены.
function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  }
  resetGameStatus();
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

// функция определения очереди игрока
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  // положить в span имя текущего игрока из массива
  activePlayerNameElement.textContent = players[activePlayer].name;
}
// функция выбора поля по очереди каждого игрока
function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }
  const selectedField = event.target;
  // получить текущую позицию ячейки при клике на поле
  const selectedColumn = selectedField.dataset.col - 1;
  // получить текущую позицию строки при клике на поле
  const selectedRow = selectedField.dataset.row - 1;
  // если поле уже занято то попросить кликнуть на пустое поле
  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field");
    return;
  }
  // добавить в игровое поле символ текущего игрока из массива
  selectedField.textContent = players[activePlayer].symbol; // players[0]
  selectedField.classList.add("disabled");

  // присвоить массиву полей активного игрока начинающегося с 1
  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }
  currentRound++;
  //  вызов функции определения очереди игрока
  switchPlayer();
}

function checkForGameOver() {
  // проверка строк на равность для одного игрока
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  // проверка ячеек на равность для одного игрока
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][0];
    }
  }
  // диагональ с верху слева вниз вправо
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  // диагональ с снизу слева вверх вправо
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
  gameOverElement.style.display = "block";
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
    
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
