const imges = document.querySelectorAll('img');
const winner = document.querySelector("#winner");
let userScore = document.querySelector("#user");
let compScore = document.querySelector("#comp");
let user = 0;
let computer = 0;
// let score = true;


const choices = ["rock", "paper", "scissor"];

//          generationg computerchoice.
let compchoice = () => {
    number = Math.floor(Math.random() * 3);
    return choices[number];
}

//          taking userchoice and computer choice.
imges.forEach(element => {
    element.addEventListener('click', () => {
        let userChoice = element.getAttribute('id');
        compchoice();
        // console.log(compchoice, " is compchoice");
        winning(userChoice, compchoice());
    });
});

//          checking condition for getting win
let winning = (userChoice, compchoice) => {
    console.log("userchoice =", userChoice, "compchoice =", compchoice);
    if (compchoice === userChoice) {
        winner.innerText = "Match tie! Play again";
        winner.style.color = "black";
    }
    else if (compchoice == "rock" && userChoice == "paper") {
        winner.innerText = `You win! ${userChoice} beats ${compchoice}`;
        winner.style.color = "#10e010";
        score = true;
        updateScore(score);
    }
    else if (compchoice == "rock" && userChoice == "scissor") {
        winner.innerText = `You lose! ${compchoice} beats ${userChoice}`;
        winner.style.color = "red";
        score = false;
        updateScore(score);
    }
    else if (compchoice == "scissor" && userChoice == "rock") {
        winner.innerText = `You win! ${userChoice} beats ${compchoice}`;
        winner.style.color = "#10e010";
        score = true;
        updateScore(score);
    }
    else if (compchoice == "scissor" && userChoice == "paper") {
        winner.innerText = `You lose! ${compchoice} beats ${userChoice}`;
        winner.style.color = "red";
        score = false;
        updateScore(score);
    }
    else if (compchoice == "paper" && userChoice == "rock") {
        winner.innerText = `You lose! ${compchoice} beats ${userChoice}`;
        winner.style.color = "red";
        score = false;
        updateScore(score);
    }
    else if (compchoice == "paper" && userChoice == "scissor") {
        winner.innerText = `You win! ${userChoice} beats ${compchoice}`;
        winner.style.color = "#10e010";
        score = true;
        updateScore(score);
    }
}
function updateScore(score){
    if(score){
        user++;
        userScore.innerText = user ;
    }
    else{
        computer++;
        compScore.innerText = computer;
    }
}