let compChoice = [];
let userChoice = [];
let keypress = false;
let level = 0;
let h1 = document.querySelector('h1');
let buttons = document.querySelectorAll('.btn');

let body = document.querySelector('body');

body.addEventListener('keypress', () => {
    if (keypress == false) {
        let number = Math.floor(Math.random() * 4);
        let color = ['green', 'orange', 'yellow', 'pink'];

        let randomColor = color[number];

        // console.log(randomColor);
        keypress = true;
        flashColor(randomColor);
        compChoice.push(randomColor);
        // console.log(compChoice);
        level++;
        h1.innerText = `Level is ${level}`;
        
    }
});

function flashColor(color) {
    let newbutton = document.querySelector(`.${color}`);
    newbutton.classList.add('flash');
    setTimeout(() => {
        newbutton.classList.remove('flash');
    }, 500);
}


function generateRandomColor() {
    let number = Math.floor(Math.random() * 4);
    let color = ['green', 'orange', 'yellow', 'pink'];
    let randomColor = color[number];
    
    console.log(randomColor);
    compChoice.push(randomColor);
    console.log(compChoice);
    userChoice = [];
    flashColor(randomColor)
}


for (button of buttons) {
    button.addEventListener('click', (e) => {
        let id = e.target.getAttribute('id');
        e.target.style.backgroundColor = "green";
        setTimeout(() => {
            e.target.style.backgroundColor = id;
        }, 250);
        userChoice.push(id);
        console.log(userChoice);
        // console.log(userChoice, compChoice);
        condition(userChoice.length - 1);
    });
}

function condition(idx) {
    if (userChoice[idx] == compChoice[idx]) {
        if (userChoice.length == compChoice.length) {
            setTimeout(() => {
                level++;
                h1.innerText = `level is ${level}`;
                generateRandomColor();
            }, 700)
        }
    }
    else {
        body.style.backgroundColor = "red";
        setTimeout(() => {
            body.style.backgroundColor = "white";
        }, 1000)
        h1.innerText = "Game Over! Restrat Again , Press any Key";
        userChoice = []
        compChoice = []
        keypress = false;
        level = 0;
    }
}


function restartGame() {
    userChoice = []
    compChoice = []
    keypress = false;
    level = 0;
    h1.innerText = "Game reset! , press any key to start"
}












