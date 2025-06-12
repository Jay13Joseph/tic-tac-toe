// const choices = { rock: 0, paper: 1, scissors: 2};
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  let humanChoice = prompt('Please enter either "0 for rock," "1 for paper," or "2 for scissors"')
   console.log(`You entered: ${humanChoice}`);
  return Number(humanChoice);
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(`Your opponent entered: ${computerSelection}`)

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice){
    console.log("It's a tie!");
  } else if (( computerChoice ===  0 && humanChoice === 1) || 
           (computerChoice === 1 && humanChoice === 2) || 
           (computerChoice === 2 &&  humanChoice === 0)) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}



playRound(humanSelection, computerSelection);