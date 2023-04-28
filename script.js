
var loader = document.getElementById('preLoader'); 
const okay = document.getElementById('yes')
okay.addEventListener("click", function(){
    loader.style.display = "none";
});

const instruction = document.getElementById('headerBtn');
const instructionDiv = document.getElementById('instructionDiv')
instruction.addEventListener('click', function(){
    instructionDiv.classList.toggle('active');
});

const about = document.getElementById('aboutGame');
const aboutDiv = document.getElementById('instructionDiv');
about.addEventListener('click', function(){
	aboutDiv.classList.toggle('active');
	aboutDiv.textContent = "This game is ";
});


// a javascript function to return Scissors, Rock and Paper;
function computerPlay(){
    // Combining Math.floor with Math.random to give us any 
    //random number from 1 - 3 when the page is loaded;
    const pick = Math.floor(Math.random() * 3 + 1);
    if (pick == 3 ){
    //if the system picks the value 3, then the string "Scissors" is attached to it
        return("Scissors");   
    }else if (pick == 2) {      
    //if the system picks the value 2, then the string "Rock" is attached to it
        return("Rock");
    }else {
    //if the system picks the value 1, then the string "Paper" is attached to it
        return("Paper");
    }
}
computerPlay(); //Calling the function computerPlay

// comparing the result of player and computer.
function playRound(playerSelection, computerSelection ) {
    // if player value is the same as computer value.
    if (playerSelection == computerSelection) {
        return "win" //"You win!";
    } else {
        //If Player value isn't the same as computer value
        return "loose" //"You Lose!";
    }
}


const buttons = document.querySelectorAll('.btn');
const myScore = document.getElementById('my_score');
const comScore = document.getElementById('com_score');
let me = 0;
let computer = 0;

buttons.forEach((btn) => {
	btn.addEventListener('click', (p) => {
			game(btn.id);
	});
});


function game(selection) {
    let playerScore = 0;
    let computerScore = 0;
		let playerSelection = selection;
		computerSelection = computerPlay();
		
		score = playRound(playerSelection,computerSelection);
		if (score == "win"){
				playerScore++
				console.log(`You win ${playerSelection} beats ${computerSelection}`);
		}else{
				computerScore++
				console.log(`You loose ${computerSelection} beats ${playerSelection}`);
		}
    

    if (playerScore > computerScore) {
        me++;
        myScore.textContent = me;
        comScore.textContent = computer;
        console.log(`You win! Score: ${playerScore} : ${computerScore}`)
    } else if (playerScore == computerScore) {
        myScore.textContent = me;
        comScore.textContent = computer;
        console.log(`This is a draw ${playerScore} : ${computerScore}`);
    }else {
        computer++;
        myScore.textContent = me;
        comScore.textContent = computer;
        console.log(`You Loose! Score: ${computerScore} to ${playerScore}`)      
    }  

		if (me % 5===0) {
			if(me===0)return;
				;
		}
		if (computer % 5===0) {
			if (computer===0)return;
			console.log('here');
		}
		
}
