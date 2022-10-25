// created variable array questions for the quiz
var quizArray = [
  {
    showQuestion: "Commonly used data types do not include:",
    answers: ["booleans", "numbers", "strings", "Hyper Text Markup Language"],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    showQuestion: "The condition inside an if/else statement is stored inside:",
    answers: [
      "parentheses",
      "curly brackets",
      "quotation marks",
      "square brackets",
    ],
    correctAnswer: "parentheses",
  },
  {
    showQuestion: "Arrays in JavaScript can be used to store:",
    answers: ["strings", "arrays", "numbers", "all of the above"],
    correctAnswer: "all of the above",
  },
  {
    showQuestion:
      "String values must be enclosed within ________ when being assigned to variables.",
    answers: ["question marks", "quotes", "square brackets", "parentheses"],
    correctAnswer: "quotes",
  },
];

// listed all element required for the functions
var startQuizEl = document.querySelector(".start");
var timerEl = document.querySelector(".timer");
var questionText = document.querySelector(".question");
var questionEl = document.querySelector(".questionTitle");
var choiceEl = document.querySelector(".answerButtons");
var alertUserEl = document.querySelector(".alertUser");
var resultEl = document.querySelector(".result");
var correctAnswerEl = document.querySelector(".correctAnswer");
var viewHighscoreEl = document.querySelector(".viewHighscore");
var userInitialEl = document.querySelector(".userInitial");
var submitBtnEl = document.querySelector(".submitBtn");
var savedHighScoreEl = document.querySelector(".savedHighScore");
var highscoresEl = document.querySelector("#highscores");
var clearHighscoresEl = document.querySelector("#clear");
var goBackEl = document.querySelector("#goBack");

var questionIndex = 0;
var timeLeft = 75;
var correctAnsCount = 0;
var userInitial = "";
var timeInterval;

// start function
startQuizEl.addEventListener("click", function () {
  startQuizEl.style.display = "none";
  viewHighscoreEl.style.display = "none";

  question();
  time();
});

// timer function
function time() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time:  " + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      alertUserEl.textContent = "All Done!";
      timerEl.textContent = "Time is stopped";
      questionEl.style.display = "none";
      resultEl.style.display = "block";
    }
  }, 1000);
}

// question function
function question() {
  questionEl.style.display = "block";
  var currentQuestion = quizArray[questionIndex];
  var titleEl = document.querySelector("#questionTitle");
  titleEl.textContent = currentQuestion.showQuestion;

  choiceEl.innerHTML = "";

  currentQuestion.answers.forEach(function (answer, index) {
    var answerBtn = document.createElement("button");
    answerBtn.setAttribute("class", "choice");
    answerBtn.setAttribute("value", answer);
    answerBtn.textContent = index + 1 + ". " + answer;
    choiceEl.appendChild(answerBtn);

    answerBtn.addEventListener("click", btnClick);
  });
}

// created button click and alert user
function btnClick() {
  if (this.value !== quizArray[questionIndex].correctAnswer) {
    timeLeft -= 10;
    alertUserEl.textContent = "Wrong!";
  } else {
    alertUserEl.textContent = "Correct!";
    countCorrectAns();
  }
  questionIndex++;

  if (questionIndex === quizArray.length) {
    timeLeft = 0;
    alertUserEl.textContent = "Quiz Ended";
    questionEl.style.display = "none";
    resultEl.style.display = "block";
    choiceEl.style.display = "none";
  } else {
    question();
  }
}

// counting the user corrected answer
function countCorrectAns() {
  correctAnsCount++;
  correctAnswerEl.textContent =
    "You answered " +
    correctAnsCount +
    " out of " +
    quizArray.length +
    " correctly!";
}

// stored user high score
function highscore(e) {
  choiceEl.style.display = "none";
  questionText.style.display = "none";
  e.preventDefault();

  var storeHighscore = localStorage.getItem("savedHighScore");
  var scoreCountArray;

  if (storeHighscore === null) {
    scoreCountArray = [];
  } else {
    scoreCountArray = JSON.parse(storeHighscore);
  }

  correctAnswerEl.textContent = correctAnsCount;

  var saveHighscore = {
    initial: userInitialEl.value.toUpperCase(),
    saveCorrectAns: correctAnswerEl.textContent,
  };

  scoreCountArray.push(saveHighscore);

  var scoreCountString = JSON.stringify(scoreCountArray);
  localStorage.setItem("highscore", scoreCountString);

  viewHighscore();
}
var i = 0;

function viewHighscore() {
  var storedHighscore = localStorage.getItem("highscore");

  if (storedHighscore === null) {
    return;
  }

  var scoreCountObject = JSON.parse(storedHighscore);
  for (; i < scoreCountObject.length; i++) {
    var newHighscore = document.createElement("h4");
    newHighscore.innerHTML =
      scoreCountObject[i].initial + " - " + scoreCountObject[i].saveCorrectAns;
    highscoresEl.appendChild(newHighscore);
  }
}

clearHighscoresEl.addEventListener("click", function () {
  localStorage.removeItem("highscores");
  highscoresEl.textContent = "";
});

submitBtnEl.addEventListener("click", function (e) {
  highscore(e);
  savedHighScoreEl.style.display = "block";
  resultEl.style.display = "none";
  viewHighscoreEl.style.display = "block";
});
viewHighscoreEl.addEventListener("click", function (e) {
  viewHighscore(e);
  savedHighScoreEl.style.display = "block";
});
goBackEl.addEventListener("click", function () {
  savedHighScoreEl.style.display = "none";
  startQuizEl.style.display = "block";
  location.reload();
});
