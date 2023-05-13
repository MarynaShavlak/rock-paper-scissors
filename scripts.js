/**1. Реалізація відкриття модального вікна із правилами гри
 * -реалізація кліку по кнопці "Правила"
 * - додавання класу modal--is-active  для блоку div.modal
 *
 *
 * 2. Реалізація закриття модального вікна із правилами гри
 * - видалення класу modal--is-active для блоку div.modal
 *
 *
 * 3. Фігура обирається:
 * - додавання класу gameContent--is-active  для блоку div.gameContent
 * - додавання класів при виборі різних фігур ГРАВЦЕМ. Якщо:
 *    1. Папір : gameContent__gameChoice gameContent__gameChoice--isPaper gameContent__gameChoice--isActive
 *    2. Камінь : gameContent__gameChoice gameContent__gameChoice--isRock gameContent__gameChoice--isActive
 *    3. Ножиці : gameContent__gameChoice gameContent__gameChoice--isScissors gameContent__gameChoice--isActive
 *
 * - додавання класів при виборі різних фігур КОМПОМ. :
 * -додати таймер
 * - після того, як час вийшов  обрати компом "випадкову фігуру"
 *    -  додати клас  gameContent__gameChoice gameContent__gameChoice--isComputer   (gameContent__gameChoice--isScissors || gameContent__gameChoice--isPaper || gameContent__gameChoice--isRock)
 *    -  для блоку із класом gameContent__gameChoiceImage прописати шлях до картинки (src)
 *
 * 4. Закінчення гри:
 * - додавання класу gameContent--is-active  gameContent--revealResult для блоку div.gameContent
 * - вивести текст із результатом гри у блоці gameContent__resultText (Draw, You win, You lose)
 * - обновити загальний бал header__scoreNumber
 *
 * 5. Перезапуск гри:
 * - видалення всіх додаткових класів для блоку div.gameContent
 * */

const btnOpenModal = document.querySelector('.container__rules');
const modalWindow = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.modal__closeIcon');
const modalOverlay = document.querySelector('.modal__overlay');
const gameContent = document.querySelector('.gameContent');
const gameChoicePaper = document.querySelector(
  '.gameContent__gameChoice--isPaper',
);
const gameChoiceRock = document.querySelector(
  '.gameContent__gameChoice--isRock',
);
const gameChoiceScissors = document.querySelector(
  '.gameContent__gameChoice--isScissors',
);

btnOpenModal.onclick = toggleModal;
btnCloseModal.onclick = toggleModal;
modalOverlay.onclick = toggleModal;
gameChoicePaper.onclick = onChoiceClick;
gameChoiceRock.onclick = onChoiceClick;
gameChoiceScissors.onclick = onChoiceClick;

function toggleModal() {
  modalWindow.classList.toggle('modal--isActive');
}
function startChoice() {
  gameContent.classList.toggle('gameContent--isActive');
}

function onChoiceClick(e) {
  console.log(e);
  startChoice();
}
