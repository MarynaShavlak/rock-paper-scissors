const btnOpenModal = document.querySelector('.container__rules');
const modalWindow = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.modal__closeIcon');
const modalOverlay = document.querySelector('.modal__overlay');
const gameContent = document.querySelector('.gameContent');
const countdownText = document.querySelector('.gameContent__countdownText');
const resultText = document.querySelector('.gameContent__resultText');
const scoreBlockText = document.querySelector('.header__scoreNumber');
const reloadBtn = document.querySelector('.gameContent__resultButton');
const gameChoiceComputerImage = document.querySelector(
  '.gameContent__gameChoiceImage',
);
const gameChoiceComputer = document.querySelector(
  '.gameContent__gameChoice--isComputer',
);
const gameChoicePaper = document.querySelector(
  '.gameContent__gameChoice--isPaper',
);
const gameChoiceRock = document.querySelector(
  '.gameContent__gameChoice--isRock',
);
const gameChoiceScissors = document.querySelector(
  '.gameContent__gameChoice--isScissors',
);
const choices = ['scissors', 'paper', 'rock'];
let userChoice;
let computerChoice;
let gameScore = 0;

btnOpenModal.onclick = toggleModal;
btnCloseModal.onclick = toggleModal;
modalOverlay.onclick = toggleModal;
gameChoicePaper.onclick = onChoiceClick;
gameChoiceRock.onclick = onChoiceClick;
gameChoiceScissors.onclick = onChoiceClick;
reloadBtn.onclick = reload;

function toggleModal() {
  modalWindow.classList.toggle('modal--isActive');
}
function startChoice() {
  gameContent.classList.add('gameContent--isActive');
  let timer = 3;
  let timerId = setInterval(function () {
    timer -= 1;
    countdownText.innerHTML = timer;
    if (!timer) {
      countdownText.innerHTML = '';
      clearInterval(timerId);
      finish();
    }
  }, 500);
}

function onChoiceClick(e) {
  const selectedChoice = e.currentTarget;
  selectedChoice.classList.add('gameContent__gameChoice--isActive');
  startChoice();
  switch (e.currentTarget) {
    case gameChoiceRock:
      userChoice = choices[2];
      break;
    case gameChoicePaper:
      userChoice = choices[1];
      break;
    default:
      userChoice = choices[0];
  }
}

function finish() {
  randomComputerChoice();
  gameContent.classList.add('gameContent--revealResult');
  result();
}

function reload() {
  gameContent.classList.remove(
    'gameContent--isActive',
    'gameContent--revealResult',
  );
  let activeElement = document.querySelector(
    '.gameContent__gameChoice--isActive',
  );
  activeElement.classList.remove('gameContent__gameChoice--isActive');
  gameChoiceComputerImage.src = '';
  gameChoiceComputer.className =
    'gameContent__gameChoice gameContent__gameChoice--isComputer';
  countdownText.innerText = 3;
}

function randomComputerChoice() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  switch (randomChoice) {
    case choices[2]:
      computerChoice = choices[2];
      break;
    case choices[1]:
      computerChoice = choices[1];
      break;
    default:
      computerChoice = choices[0];
  }
  const capitalizedChoice =
    randomChoice.charAt(0).toUpperCase() + randomChoice.slice(1);

  gameChoiceComputer.classList.add(
    `gameContent__gameChoice--is${capitalizedChoice}`,
  );
  gameChoiceComputerImage.src = `images/icon-${randomChoice}.svg`;
}

function result() {
  if (userChoice === computerChoice) {
    resultText.innerText = 'Draw';
  } else if (
    (userChoice == choices[1] && computerChoice == choices[1]) ||
    (userChoice == choices[0] && computerChoice == choices[1]) ||
    (userChoice == choices[2] && computerChoice == choices[0])
  ) {
    resultText.innerText = 'You win';
    updateScore(1);
  } else {
    resultText.innerText = 'You lose';
    updateScore(-1);
  }
}

function updateScore(score) {
  if (!gameScore && score < 0) return;
  gameScore += score;
  scoreBlockText.innerText = gameScore;
}
