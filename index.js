// Declare choices
const choiceNames = ["rock", "paper", "scissors"];
  console.log("Welcome to Rock, Paper, Scissors!");
  console.log("You will be playing against a computer opponent. His name is Ivan!");

// Set initial score values
let humanScore = 0
let computerScore = 0

// Get computer choice
function getComputerChoice() {
  return choiceNames[Math.floor(Math.random() * 3)];
}

// Get user choice
function getHumanChoice() {
  let humanChoice = prompt('Please enter either "rock," "paper," or "scissors"')
  return (humanChoice);
}

// Capitalize first letter of inputs
function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Play a round
function playRound(humanChoice, computerChoice) {
   console.log(`You entered: ${humanChoice}`);
   console.log(`Your opponent entered: ${computerChoice}`)

  if (humanChoice === computerChoice){
    console.log("It's a tie!");
    } else if ((computerChoice ===  "rock" && humanChoice === "paper") || 
               (computerChoice === "paper" && humanChoice === "scissors") || 
               (computerChoice === "scissors" &&  humanChoice === "rock")) {
    console.log(`You win! ${capitalizeFirst(humanChoice)} beats ${computerChoice}!`);
    humanScore ++;
    } else {
    console.log(`You lose! ${capitalizeFirst(computerChoice)} beats ${humanChoice}!`);
    computerScore ++;
    }
    console.log(`The score is You: ${humanScore}, Ivan: ${computerScore}`)
  }

// Print final score
function finalScore() {
  if (humanScore === computerScore) {
    console.log("It's a tie!");
    }
  else if (humanScore > computerScore) {
    console.log(`You win! The final score is ${humanScore} to ${computerScore}!`);
    }
  else {
    console.log(`You lose! The final score is ${computerScore} to ${humanScore}!`);
    }
}

// Play a game. Optimize by using a loop
function playGame() {
    const humanSelection = getHumanChoice().toLowerCase().trim();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection); 
}

playGame();
playGame();
playGame();
playGame();
playGame();
finalScore();
// To-do:
// Validate user input, must be one of three choices.  
// Improve by using loops for playing rounds and for validating user inputs