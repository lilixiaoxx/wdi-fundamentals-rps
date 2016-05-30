////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move` 
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move!=null){
     return move;
    } else {
  return getInput();
    }

}
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move!=null){
     return move;
    } else {
 return randomPlay();
 }
}

   function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove==="rock"){
    	if(computerMove==="rock"){
    		winner = "tie";
    	} else if(computerMove==="paper"){
    		winner="computer";
    	}else if (computerMove==="scissors"){
    		winner="player"
    	}
    }
    if (playerMove==="paper"){
    	if(computerMove==="rock"){
    		winner = "player";
    	} else if(computerMove==="paper"){
    		winner="tie";
    	}else if (computerMove==="scissors"){
    		winner="computer"
    	}
    }
    if (playerMove==="scissors"){
    	if(computerMove==="rock"){
    		winner = "computer";
    	} else if(computerMove==="paper"){
    		winner="player";
    	}else if (computerMove==="scissors"){
    		winner="tie"
    	}
    }
    return winner;
}
console.log(getWinner("rock","rock"));
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
 
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while(playerWins<5 && computerWins<5){
	    var playerMoveThisRound = getPlayerMove();
	    var computerMoveThisRound = getComputerMove();
	    var winnerThisRound = getWinner(playerMoveThisRound, computerMoveThisRound);
	    
	    if (winnerThisRound === "player"){
	    		playerWins +=1;
	    		console.log("The score is " + "player" + playerWins + ":" + computerWins + " computer");
	    		if(playerWins ===5){
	    			console.log("Congrates!! You Win");
	    			
	    		}
	    
	    	}
	    else if(winnerThisRound ==="computer"){
	    	   computerWins +=1;
	    	   console.log("The score is " + "player" + playerWins + ":" + computerWins + " computer");
	    	   if (computerWins===5){
	    	   	console.log("Sorry, computer win");
	    	
	    	   }
		  	}
		
    }
    console.log("The final score is: "+playerWins + ": " + computerWins);
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

playToFive()