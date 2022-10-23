var questions = [
  {
    question: "Commonly used data types do not include:",
    answer: "Hyper Text Markup Language",
    options: ["booleans", "numbers", "strings", "Hyper Text Markup Language"],
  },
  {
    question: "The condition inside an if/else statement is stored inside:",
    answer: "parentheses",
    options: [
      "parentheses",
      "curly brackets",
      "quotation marks",
      "square brackets",
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answer: "all of the above",
    options: ["strings", "arrays", "numbers", "all of the above"],
  },
  {
    question:
      "String values must be enclosed within __ when being assigned to variables.",
    answer: "quotes",
    options: ["question marks", "quotes", "square brackets", "parentheses"],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: "console.log",
    options: ["for loops", "terminal/bash", "JavaScript", "console.log()"],
  },
];

var startBtn = document.querySelector(".start-quiz");
var startSection = document.querySelector(".start-section");
var quizSection = document.querySelector(".quiz-section");
var timer = document.querySelector("#timer");
var finishSection = document.querySelector(".finish-section");

var secondsLeft = 45;
var score;

// Set time for Timer section
function timer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      score = 0;
      quizSection.classList.add("hidden");
      finishBox.classList.remove("hidden");
    } else if (secondsLeft <= 0) {
      secondsLeft = 0;
      score = 0;
      timer.textContent = "Time: " + secondsLeft;
      quizSection.classList.add("hidden");
      finishSection.classList.remove("hidden");
    }
  }, 1000);
}
// Start button function
startBtn.addEventListener("click", function () {
  startSection.classList.add("hidden");
});
