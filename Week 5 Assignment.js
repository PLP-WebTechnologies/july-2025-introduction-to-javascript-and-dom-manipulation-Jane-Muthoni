// Part 1: Variables and Conditionals
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', () => {
  const age = Number(ageInput.value);

  // Conditional to check if age is valid and determine category
  if (!age) {
    ageResult.textContent = 'Please enter a valid age.';
  } else if (age < 18) {
    ageResult.textContent = 'You are a minor.';
  } else if (age >= 18 && age <= 65) {
    ageResult.textContent = 'You are an adult.';
  } else {
    ageResult.textContent = 'You are a senior citizen.';
  }
});

// Part 2: Functions

// Function 1: sum two numbers and return the result
function sum(a, b) {
  return a + b;
}

// Function 2: format greeting string with name input
function formatGreeting(name) {
  return `Hello, ${name}! Welcome to JavaScript learning.`;
}

const sumBtn = document.getElementById('sumBtn');
const sumResult = document.getElementById('sumResult');
sumBtn.addEventListener('click', () => {
  const result = sum(3, 4);
  sumResult.textContent = `Sum of 3 + 4 = ${result}`;
});

const formatBtn = document.getElementById('formatBtn');
const greetingResult = document.getElementById('greetingResult');
formatBtn.addEventListener('click', () => {
  const greeting = formatGreeting('Student');
  greetingResult.textContent = greeting;
});

// Part 3: Loops

const countdownBtn = document.getElementById('countdownBtn');
const countdownResult = document.getElementById('countdownResult');

countdownBtn.addEventListener('click', () => {
  let text = '';
  for (let i = 5; i > 0; i--) {
    text += i + ' ';
  }
  countdownResult.textContent = text.trim();
});

const listColorsBtn = document.getElementById('listColorsBtn');
const colorList = document.getElementById('colorList');

listColorsBtn.addEventListener('click', () => {
  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
  colorList.innerHTML = ''; // Clear previous list
  colors.forEach(color => {
    const li = document.createElement('li');
    li.textContent = color;
    colorList.appendChild(li);
  });
});

// Part 4: DOM Interactions

const changeTextBtn = document.getElementById('changeTextBtn');
const toggleClassBtn = document.getElementById('toggleClassBtn');
const addElementBtn = document.getElementById('addElementBtn');
const dynamicContent = document.getElementById('dynamicContent');
const heading = document.querySelector('h1');

changeTextBtn.addEventListener('click', () => {
  heading.textContent = 'JavaScript is Awesome!';
});

toggleClassBtn.addEventListener('click', () => {
  heading.classList.toggle('highlight');
});

addElementBtn.addEventListener('click', () => {
  const p = document.createElement('p');
  p.textContent = 'This paragraph was added dynamically via JavaScript.';
  dynamicContent.appendChild(p);
});
