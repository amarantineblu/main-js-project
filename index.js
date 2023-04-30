// function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function computerPlay () {
    // total number of objects
    const MAX = 3;
    // number of items to be returned at a time
    const MIN = 1;
    let selectedItem;
    // let the computer select an item
    selectedItem = Math.floor(Math.random() * (MAX - MIN + 1) ) + MIN;
    // determine what the computer has selected
    let play;
    switch (selectedItem){
        case 1: 
        play = "Rock";
        break;
        case 2: 
        play = "Paper";
        break;
        
        case 3: 
        play = "Scissors";      
    }
    return play;
    //console.log(play);
}

// function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection ) {
    // declares the winner of the round.
    if (playerSelection == computerSelection) {
        //console.log(`You win!`)
        return "win" //"You win!";
    } else {
        //console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return "lose" //"You Lose! ${computerSelection} beats ${playerSelection}";
    }
}

// function to play a 5 round game that keeps score and reports a winner or loser
function game() {
    // prompt for player selection
    let playerSelection = "";
    let computerSelection = "";
    let score = "";
    let yourCount = 0;
    let computerCount = 0;
    for(let round = 0; round < 5; round++) {
        let count = round;
        playerSelection = prompt(`Select: Rock, Paper or Scissors (Round ${count + 1})` ).toUpperCase();
        computerSelection = computerPlay().toUpperCase();
        score = playRound(playerSelection, computerSelection);
        if (score == "win") {
            yourCount++;
            console.log(`You win!`);
        } else {
            computerCount++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }  
    }
    if (yourCount > computerCount) {
        console.log(`You win! Score: ${yourCount} to ${computerCount}`)
    } else {
        console.log(`You Lose! Score: ${computerCount} to ${yourCount}`)      
    }
}
game();
