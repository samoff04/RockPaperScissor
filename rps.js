const namePopup = document.getElementById('name-popup');
const leavePopup = document.getElementById('leave-popup');
const goodbyeMessage = document.getElementById('goodbye-message');
const gameContainer = document.getElementById('game-container');

const startGameBtn = document.getElementById('start-game');
const nameInput = document.getElementById('name-input');
const playerNameDisplay = document.getElementById('player-name');
const scoreboardTitle = document.getElementById('scoreboard-title');

const playerMoveSpan = document.getElementById('player-move');
const botMoveSpan = document.getElementById('bot-move');
const playerScoreSpan = document.getElementById('player-score');
const botScoreSpan = document.getElementById('bot-score');
const outcomeDiv = document.getElementById('outcome');

const choiceButtons = document.querySelectorAll('.choice');
const leaveBtn = document.getElementById('leave-btn');
const confirmLeave = document.getElementById('confirm-leave');
const cancelLeave = document.getElementById('cancel-leave');

let playerName = '';
let playerScore = 0;
let botScore = 0;

function botChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
  const bot = botChoice();

  playerMoveSpan.textContent = capitalize(playerChoice);
  botMoveSpan.textContent = capitalize(bot);

  if (playerChoice === bot) {
    outcomeDiv.textContent = "It's a Draw!";
    outcomeDiv.style.color = '#ffd700';
  } else if (
    (playerChoice === 'rock' && bot === 'scissors') ||
    (playerChoice === 'paper' && bot === 'rock') ||
    (playerChoice === 'scissors' && bot === 'paper')
  ) {
    playerScore++;
    outcomeDiv.textContent = `${playerName} Wins This Round!`;
    outcomeDiv.style.color = '#2ecc71';
  } else {
    botScore++;
    outcomeDiv.textContent = `Bot Wins This Round!`;
    outcomeDiv.style.color = '#e74c3c';
  }

  playerScoreSpan.textContent = playerScore;
  botScoreSpan.textContent = botScore;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Name submission
startGameBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name !== '') {
    playerName = name;
    playerNameDisplay.textContent = playerName;
    scoreboardTitle.textContent = `${playerName} vs Bot`;
    namePopup.classList.add('hidden');
    gameContainer.classList.remove('hidden');
  }
});

// Choice buttons
choiceButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    playRound(btn.dataset.choice);
  });
});

// Leave button
leaveBtn.addEventListener('click', () => {
  leavePopup.classList.remove('hidden');
});

// Confirm leave
confirmLeave.addEventListener('click', () => {
  gameContainer.classList.add('hidden');
  leavePopup.classList.add('hidden');
  goodbyeMessage.classList.remove('hidden');
});

// Cancel leave
cancelLeave.addEventListener('click', () => {
  leavePopup.classList.add('hidden');
});
