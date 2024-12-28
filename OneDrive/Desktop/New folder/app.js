let userscore = 0;
let comscore = 0;
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");  // Selecting all choices

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);  // Generate a random index
    return options[randIdx];
};

const drawgame = () => {
    console.log("game was draw");
    msg.innerText = "Game was a draw. Play again";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `Yehh! You win, your choice ${userChoice} beats computer's choice ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comscore++;
        compScorePara.innerText = comscore;
        msg.innerText = `You have lost the match, computer's choice ${compChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    if (userscore === 3) {
        msg.innerText = "Yehh! You won the total match. Congrats!";
        msg.style.backgroundColor = "gold";
        disableGame();
    } else if (comscore === 3) {
        msg.innerText = "Computer won the total match. Better luck next time!";
        msg.style.backgroundColor = "gold";
        disableGame();
    }
};

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const compChoice = genComputerChoice();
    console.log("Computer choice = ", compChoice);

    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userwin = compChoice === "scissor" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }

        showWinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Your choice was clicked: ", userChoice);
        playGame(userChoice);
    });
});
