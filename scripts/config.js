// открытие оверлея и появление заднего фона по клику на кнопку
function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}
// закрытие оверлея по клику на кнопку или заднему фону
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('playername').trim(); // '      ' => ''

  if (!enteredPlayername) { // enteredPlayername === ''
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;
  }
}
