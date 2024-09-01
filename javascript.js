function getComputerChoice() {

    compNum = Math.floor(Math.random() * 2);
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

    userChoice = prompt("Please Type Your Choice: \nRock\nPaper\nScissors\n");
//If user wins
    if (userChoice == "Rock" && compChoice == "Scissors" || 
        userChoice == "Paper" && compChoice == "Rock" || 
        userChoice == "Scissors" && compChoice == "Paper") {
        console.log("Congratulations! You Won\nThe computer chose:", compChoice, "and you chose:", userChoice);
    }
//If user loses
    else if (compChoice == "Rock" && userChoice == "Paper" || 
        compChoice == "Paper" && userChoice == "Scissors" || 
        compChoice == "Scissors" && userChoice == "Rock") {
        console.log("Sorry, you lost!\nThe computer chose:", compChoice, "\nYou chose:", userChoice);
    }

    else{
        console.log("Its a tie! You and the computer both chose", compChoice);
    }


    
}

getComputerChoice();