// открытие оверлея и появление заднего фона по клику на кнопку
function openPlayerConfig () {
    playerConfigOverlay.style.display = 'block';
    backdropElement.style.display = 'block';
}
// закрытие оверлея по клику на кнопку или заднему фону
function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlayerConfig(event) {
    // убрать дефолт состояние объекта
    event.preventDafault();
    // создать новый экземпляр объекта с сылкой на объект события
    const formData = new FormData(event.target);
    // получить поле с которого нужно считать данные
    const enteredPlayerName = formData.get('playername');
   

}