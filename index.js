let computerSelection = computerPlay()
let playerScore = 0
let compScore = 0
//let playerSelection = playerPlay()

function computerPlay(){

    let choiceNumber = Math.floor(Math.random()*3)

    switch(choiceNumber)
    {
        case 0:
            choice = "rock"
            return choice
         case 1:
            choice = "paper"
            return choice
         case 2:
            choice = "scissors"
            return choice;
        default:
            return "no option" 
    }

}

function playRound(playerSelection, computerSelection){

    let result = ""
    
    if((playerSelection === "rock" && computerSelection === "scissors")
    || (playerSelection === "scissors" && computerSelection === "paper")
    || (playerSelection === "paper" && computerSelection === "rock"))
    {
        playerScore++
        result = `You win! ${playerSelection} beats ${computerSelection}`
    }
    else if(playerSelection === computerSelection)
    {
        result = `Tie!`
    }
    else
    {
        compScore++
        result = `You lose! ${computerSelection} beats ${playerSelection}`
    }
    console.log(result)
}

console.log(playRound("rock", computerSelection))


// function playerPlay(){
//     let choice = prompt("Rock Paper or Scissors")
//     console.log(`The players choice: ${choice}`)
//     return choice
// }