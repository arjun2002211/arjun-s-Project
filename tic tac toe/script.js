let container = document.querySelector('#container');
let buttons = document.querySelectorAll('.button');
let winner = document.querySelector('#winner');
let newGame = document.querySelector("#newgame");
let reset = document.querySelector("#reset");
//console.log(buttons);
//console.log(container);
let zero = true;
let pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

function checkwinner(button) {
  for (index of pattern) {
    let button1 = buttons[index[0]].innerText;
    let button2 = buttons[index[1]].innerText;
    let button3 = buttons[index[2]].innerText;
    // console.log(button1, button2, button3);
    // console.log(index[0],index[1],index[2]);
    if (button1 != "" && button2 != "" && button3 != "") {
      if (button1 == button2 && button2 == button3) {
        winner.innerText = `${button1} is winner`;
        winner.style.visibility = "visible";
        buttons.forEach((element) => {
          element.disabled = true;
        })
      }
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.innerText == "") {
      if (zero == true) {
        button.innerText = "O";
        button.style.color = "red";
        button.style.fontWeight = "bold";
        zero = false;
      }
      else {
        button.innerText = "X";
        button.style.fontWeight = "bold";
        button.style.color = "black";
        zero = true;
      }
    }
    button.disabled = true;
    checkwinner(button);
  });
});

newGame.addEventListener('click', () => {
  buttons.forEach((button) => {
    button.innerText = "";
    button.disabled = false;
  });
});





