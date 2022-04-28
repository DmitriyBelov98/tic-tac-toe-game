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
    // добавить в поле символ текущего игрока из массива
    event.target.textContent = players[activePlayer].symbol; // players[0]
    event.target.classList.add('disabled');
    //  вызов функции определения очереди игрока
    switchPlayer();
}