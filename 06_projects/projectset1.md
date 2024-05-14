# project related DOM

## Project Links

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 solution

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);

  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project 2 solution

```javascript
console.log("Project 2 solution");
const form = document.querySelector("form");

//ths usecase will give empty values
//const height = parseInt(document.querrySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const result1 = document.querySelector("#results1");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please enter the valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter the valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the results
    result.innerHTML = `<span>${bmi}</span>`;
  }
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (bmi <= 18.6) {
    result1.innerHTML = `<span>Under Weight</span>`;
  } else if (bmi > 18.6 && bmi < 24.6) {
    result1.innerHTML = `<span>Normal Range</span>`;
  } else {
    result1.innerHTML = `<span>Over weight</span>`;
  }
});
```

## Project 3 solutrion

```javascript
const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4 solution

```javascript
let randomNumber = parseInt(Math.random() * 10 + 1);
console.log(randomNumber);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1; // this show the number of guesses
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  // to check the values is valid or not
  if (isNaN(guess)) {
    alert("Please Enter the valid number");
  } else if (guess < 1) {
    alert("Please enter the number greater than 1");
  } else if (guess > 10) {
    alert("Please enter the number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 3) {
      displayGuess(guess);
      displayMessage(`Game Over !  Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // to check if the guess is correct or not and low/high to guess number
  if (guess === randomNumber) {
    displayMessage("Horrah ! Your guess is right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too low");
  } else if (guess > randomNumber) {
    displayMessage("Number is too high");
  }
}

function displayGuess(guess) {
  //
  userInput.value = "";
  guessSlot.innerHTML += `${guess} ,  `;
  numGuess++;
  remaining.innerHTML = `${3 - numGuess}`;
}

function displayMessage(message) {
  //
  lowOrHigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  //
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // making default everything
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${4 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    displayMessage("");
    playGame = true;
  });
}
```

## Project 6 solution

```javascript
// generate the random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null; // de-referencing
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
```
