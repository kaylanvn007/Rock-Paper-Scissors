//------Varsiables------
let playerScore = 0
let compScore = 0
let matchesPlayed = 0

//------Core Game Loop-------
while(matchesPlayed != 5){
    let playerSelection = playerPlay()
    let computerSelection = computerPlay()
    
    console.log(playRound(playerSelection, computerSelection))
    console.log(`Selections: ${playerSelection}, ${computerSelection}`)
    matchesPlayed++
}

//--------Game functions----------
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
    return result
}

function playerPlay(){
    let choice = prompt("Rock Paper or Scissors")
    return choice
}

function computerPlay(){

    let choice = ""
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
    }
}