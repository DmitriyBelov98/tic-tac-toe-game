// функция показа игрового поля только когда имена игроков внесены.
function startNewGame () {
    if(players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names for both players!');
        return;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}
// функция определения очереди игрока
function switchPlayer () {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    // положить в span имя текущего игрока из массива
    activePlayerNameElement.textContent = players[activePlayer].name;
}
// функция выбора поля по очереди каждого игрока
function selectGameField (event) {
    
    if(event.target.tagName !== 'LI') {
        return;
    }
    const selectedField = event.target;
    // добавить в поле символ текущего игрока из массива
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please select an empty field');
        return;
    }
    selectedField.textContent = players[activePlayer].symbol; // players[0]
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData)
    //  вызов функции определения очереди игрока
    switchPlayer();
}