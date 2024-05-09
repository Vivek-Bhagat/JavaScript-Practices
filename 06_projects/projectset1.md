# project related DOM

## project links

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

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

## Project 2

```javascript
console.log("Project 2 solution");
const form = document.querySelector('form');

//ths usecase will give empty values
//const height = parseInt(document.querrySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  const result1 = document.querySelector('#results1');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please enter the valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please enter the valid weight';
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
