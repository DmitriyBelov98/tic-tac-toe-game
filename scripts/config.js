// открытие оверлея и появление заднего фона по клику на кнопку
function openPlayerConfig(event) {
  // получить текущий id игрока
  editedPlayer = +event.target.dataset.playerid; // +'1' => 1
  
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}
// закрытие оверлея по клику на кнопку или заднему фону
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  // полная очистка формы 
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim(); // '      ' => ''

  if (!enteredPlayername) {
    // enteredPlayername === ''
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
  // получить элемент на основе выбранного id
  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  // обновить информацию и положить в нужный элемент
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  // if(editedPlayer === 1) {
  //   players[0].name = enteredPlayername;
  // } else {
  //   players[1].name = enteredPlayername;
  // }
  // положить в массив полученное введённое имя
  players[editedPlayer - 1].name = enteredPlayername;
  // принудительынй вызов функции закрытия
  closePlayerConfig();
}
