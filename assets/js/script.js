// questions array
var questions = [
  {
    showQuestion: "Commonly used data types do not include:",
    correctAnswer: "Hyper Text Markup Language",
    options: ["booleans", "numbers", "strings", "Hyper Text Markup Language"],
  },
  {
    showQuestion: "The condition inside an if/else statement is stored inside:",
    correctAnswer: "parentheses",
    options: [
      "parentheses",
      "curly brackets",
      "quotation marks",
      "square brackets",
    ],
  },
  {
    showQuestion: "Arrays in JavaScript can be used to store:",
    correctAnswer: "all of the above",
    options: ["strings", "arrays", "numbers", "all of the above"],
  },
  {
    showQuestion:
      "String values must be enclosed within __ when being assigned to variables.",
    correctAnswer: "quotes",
    options: ["question marks", "quotes", "square brackets", "parentheses"],
  },
  {
    showQuestion:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    correctAnswer: "console.log",
    options: ["for loops", "terminal/bash", "JavaScript", "console.log()"],
  },
];
//
var startQuizEl = document.querySelector(".start-quiz");
var timerEl = document.querySelector(".timer");
var quizText = document.querySelector(".quiz");
var quizEl = document.querySelector(".quiz-title");
var choiceEl = document.querySelector(".answer-buttons");
var alertUserEl = document.querySelector(".alert-user");
var resultEl = document.querySelector(".result");
var correctAnswerEl = document.querySelector(".correct-answer");
var viewHighScoreEl = document.querySelector(".view-high-score");
var userInitialEl = document.querySelector(".user-initial");
var submitBtnEl = document.querySelector(".submitBtn");
var savedHighScoreEl = document.querySelector(".saved-high-score");
var highScoresEl = document.querySelector("#highscores");
var clearHighScoresEl = document.querySelector("#clear");
var goBackEl = document.querySelector("#go-back");

var questionIndex = 0;
var timeLeft = 60;
var correctAnsCount = 0;
var userInitial = "";
var timeInterval;

// Set time for Timer section
function time() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time:  " + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      alertUserEl.textContent = "Quiz Ended";
      timerEl.textContent = "Time is stopped";
      quizEl.style.display = "none";
      resultEl.style.display = "block";
    }
  }, 1000);
}

// Start button function
startQuizEl.addEventListener("click", function () {
  startQuizEl.style.display = "none";
  viewHighScoreEl.style.display = "none";

  time();
});

// show the question
