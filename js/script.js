var loader = document.getElementById('preLoader');
const okay = document.getElementById('yes')
okay.addEventListener("click", function () {
	loader.style.display = "none";
});

const instruction = document.getElementById('headerBtn');
const instructionDiv = document.getElementById('instructionDiv')
instruction.addEventListener('click', function () {
	instructionDiv.classList.toggle('active');
});

const about = document.getElementById('aboutGame');
const aboutDiv = document.getElementById('instructionDiv');
about.addEventListener('click', function () {
	aboutDiv.classList.toggle('active');
	aboutDiv.textContent = "I decided to call this game 'AgCom' just like an abbreviation of Against Computer";
});


// a javascript function to return Scissors, Rock and Paper;
const gameParameters = ["rock", "paper", "scissors"];

function computerPlay() {
	const pick = Math.floor(Math.random() * gameParameters.length);
	let play
	switch (pick) {
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
}
computerPlay();

function playRound(playerSelection, computerSelection) {
	if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")) {
		return 'win'
	} else {
		return "loose"
	}
}

const buttons = document.querySelectorAll('.btn');
const myScore = document.getElementById('my_score');
const comScore = document.getElementById('com_score');
let me = 0;
let computer = 0;

buttons.forEach((btn) => {
	btn.addEventListener('click', (p) => {
		game(btn.id); //Each button calls the game function when clicked
	});
});


function game(selection) {
	let playerScore = 0;
	let computerScore = 0;
	let playerSelection = selection;
	computerSelection = computerPlay();
	let score = playRound(playerSelection, computerSelection);

	if (score == "win") {
		playerScore++
		console.log(`You win ${playerSelection} beats ${computerSelection}`);
	} else {
		computerScore++
		console.log(`You loose ${playerScore} beats ${computerSelection}`);
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
	} else {
		computer++;
		myScore.textContent = me;
		comScore.textContent = computer;
		console.log(`You Loose! Score: ${playerScore} to ${computerScore}`)
	}

	if (me % 5 === 0) {
		if (me === 0) return; //On this if statement and the one to follow, the alert
		alert('You win'); // function announces the winner iff the winner has 5 points
	}
	if (computer % 5 === 0) {
		if (computer === 0) return;
		alert("Computer win");
	}
}