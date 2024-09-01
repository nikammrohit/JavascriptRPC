function getComputerChoice() {

        
    compNum = Math.floor(Math.random() * 3);
 //Assign # to computer choice string
    switch (compNum) {
        case 0:
            compChoice = "Rock"
            break;
        case 1:
            compChoice = "Paper"
            break;
        case 2:
            compChoice = "Scissors"
            break;
        default:
            break;
    }
    
    
}

function getHumanChoice() {
    //Get user choice and convert all characters to lowercase and then first character to upper
    userChoice = prompt("Please Type Your Choice: \nRock\nPaper\nScissors\n").toLowerCase();
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
}

let userWin = 0;
let compWin = 0;

function playRound(getHumanChoice, getComputerChoice) {
//If user wins
    if (userChoice == "Rock" && compChoice == "Scissors" || 
        userChoice == "Paper" && compChoice == "Rock" || 
        userChoice == "Scissors" && compChoice == "Paper") {
        console.log("Congratulations! You Won\nThe computer chose:", compChoice, "and you chose:", userChoice);
        userWin += 1;
        console.log("Your Score:",userWin,"\nComputer Score:",compWin);
    }

//If user loses
    else if (compChoice == "Rock" && userChoice == "Paper" || 
        compChoice == "Paper" && userChoice == "Scissors" || 
        compChoice == "Scissors" && userChoice == "Rock") {
        console.log("Sorry, you lost!\nThe computer chose:", compChoice, "\nYou chose:", userChoice);
        compWin += 1;
        console.log("Your Score:",userWin,"\nComputer Score:",compWin);
    }

//If there is a tie
    else{
        console.log("Its a tie! You and the computer both chose", compChoice);
        userWin += 1;
        compWin += 1;
        console.log("Your Score:",userWin,"\nComputer Score:",compWin);
    }

}






userRounds = 'y';

while (userRounds === 'y') {

    getComputerChoice();
    getHumanChoice();
    playRound();
    

    //How many times the game will run
    userRounds = prompt("Would you like to play again? (y/n):");

}

console.log("Thank you for playing!");

    
