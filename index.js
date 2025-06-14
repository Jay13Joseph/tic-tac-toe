const choiceNames = ["rock", "paper", "scissors"];

humanScore = 0
computerScore = 0

function getComputerChoice() {
  return choiceNames[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let humanChoice = prompt('Please enter either "rock," "paper," or "scissors"')
  return (humanChoice);
}

const humanSelection = getHumanChoice().toLowerCase().trim();
const computerSelection = getComputerChoice();



function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(humanChoice, computerChoice) {
   console.log(`You entered: ${humanChoice}`);
   console.log(`Your opponent entered: ${computerSelection}`)

  if (humanChoice === computerChoice){
    console.log("It's a tie!");
  } else if (( computerChoice ===  "rock" && humanChoice === "paper") || 
           (computerChoice === "paper" && humanChoice === "scissors") || 
           (computerChoice === "scissors" &&  humanChoice === "rock")) {
    console.log(`You win! ${capitalizeFirst(humanChoice)} beats ${computerChoice}!`);
    humanScore += 1;
  } else {
    console.log(`You lose! ${capitalizeFirst(computerChoice)} beats ${humanChoice}!`);
    computerScore += 1;
  }
  console.log(`The score is You: ${humanScore}, Ivan: ${computerScore}`)
}

function playGame() {
  console.log("Welcome to Rock, Paper, Scissors!");
  console.log("You will be playing against a computer opponent. His name is Ivan!");
  playRound(humanSelection, computerSelection);
  // playRound(humanSelection, computerSelection);
  // playRound(humanSelection, computerSelection);
  // playRound(humanSelection, computerSelection);
  // playRound(humanSelection, computerSelection);
}

playGame()

// To-do:
// Play 5 rounds
// Add a function to keep track of score
// Add a function to display final score      