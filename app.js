const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}. Therefore you `;;
  if (winner === RESULT_DRAW) {
    message = message + ' had a draw';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + ' won';
  } else {
    message = message + ' lost';
  }
  alert(message);
  gameIsRunning = false;
});

// not related to the game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum, 'The result after calculating all numbers is');
};

// const subtractDown = (resultHandler, ...numbers) => {
  //   let sub = 0;
  //   for (const num of numbers) { 
  //     sub -= num;
  //   }
  //   return resultHandler(sub);
  // };

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};
 
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 2, 'duncan', -8, 20);
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 2, 5, -8, 20, 4, 6);
combine(showResult.bind(this, 'The result after subtracting all numbers is:'), 'SUBTRACT', 2, 5, -8, 20);
combine(showResult.bind(this, 'The result after subtracting all numbers is:'), 'SUBTRACT', 2, 5, -8, 20, 4, 6);







