/**
 * Criteria
 */

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//DEFINE VARIABLES

// Define a set of questions
const questions = [
  {
    question: "Who was the first member to join BTS?",
    choices: ["a. <Suga>", "b. <Jungook>", "c. <Jin>", "d. <RM>"],
    answer: "d. <RM>",
  },
  {
    question: "Who was the last member to join BTS?",
    choices: ["a. Jungkook", "b. Suga", "c. Jimin", "d. J-Hope"],
    answer: "c. Jimin",
  },
  {
    question: "Which was the first album in the Love Yourself series?",
    choices: ["a. Answer", "b. Her", "c. Tear", "d. Face Yourslef"],
    answer: "b. Her",
  },
  {
    question: "In what year did BTS debut?",
    choices: ["a. 2011", "b. 2012", "c. 2013", "d. 2014"],
    answer: "c. 2013",
  },
  {
    question: "On which award show did BTS make their US TV performance debut?",
    choices: [
      "a. Billboard Music Awards",
      "b. American Music Awards",
      "c. The Grammys",
      "d. MTV Video Music Awards",
    ],
    answer: "b. American Music Awards",
  },
  {
    question:
      "Which BTS music video was the first to reach 100 million views on YouTube?",
    choices: ["a. Butter", "b. Dynamite", "c. Dope", "d. Mic Drop"],
    answer: "c. Dope",
  },
  {
    question:
      "Which charity did BTS partner up with and donated over $1 million US dollars to?",
    choices: ["a. Unbound", "b. UNICEF", "c. ALSAC", "d. Pencils of Promise"],
    answer: "b. UNICEF",
  },
  {
    question:
      "What American TV show did RM watch to learn how to speak English fluently?",
    choices: ["a. Friends", "b. The Office", "c. The Sopranos", "d. Survivor"],
    answer: "a. Friends",
  },
  {
    question: "What is V’s real name?",
    choices: [
      "a. Brendan Eich",
      "b. Kim Seok-jin",
      "c. Kim Tae-hyung",
      "d. Kim Hyun-joong",
    ],
    answer: "c. Kim Tae-hyung",
  },
  {
    question: "Which member is NOT a rapper in the group?",
    choices: ["a. RM", "b. Suga", "c. Jungkook", "d. J-Hope"],
    answer: "c. Jungkook",
  },
  {
    question: "How many memebers are in BTS",
    choices: ["a. 7", "b. 6", "c. 8", "d. 4"],
    answer: "a. 7",
  },
  {
    question: "What does BTS stand for?",
    choices: [
      "a. Bangtan Sonyeondan ",
      "b. Behind the Scenes",
      "c. Burn The Stage",
      "d. Be There Soon",
    ],
    answer: "a. Bangtan Sonyeondan",
  },
];

// grab references to elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn");
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// define other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

//Functions

// WHEN I click the start button, timer starts
var totalTime = 151;
function newQuiz() {
  questionIndex = 0;
  totalTime = 150;
  timeLeft.textContent = totalTime;
  initialInput.textContent = "";

  startDiv.style.display = "none";
  questionDiv.style.display = "block";
  timer.style.display = "block";
  timesUp.style.display = "none";

  var startTimer = setInterval(function () {
    totalTime--;
    timeLeft.textContent = totalTime;
    if (totalTime <= 0) {
      clearInterval(startTimer);
      if (questionIndex < questions.length - 1) {
        gameOver();
      }
    }
  }, 1000);

  showQuiz();
}

// console.log(questions[questionIndex].question);
// console.log(questions[questionIndex].choices);

// then presented with questions and choices
function showQuiz() {
  nextQuestion();
}

function nextQuestion() {
  questionTitle.textContent = questions[questionIndex].question;
  choiceA.textContent = questions[questionIndex].choices[0];
  choiceB.textContent = questions[questionIndex].choices[1];
  choiceC.textContent = questions[questionIndex].choices[2];
  choiceD.textContent = questions[questionIndex].choices[3];
}

// after question is answered, show if correct or wrong
function checkAnswer(answer) {
  var lineBreak = document.getElementById("lineBreak");
  lineBreak.style.display = "block";
  answerCheck.style.display = "block";

  if (
    questions[questionIndex].answer === questions[questionIndex].choices[answer]
  ) {
    // correct answer, add 1 score to final score
    correctAns++;
    // console.log(correctAns);
    answerCheck.textContent = "Correct!";
  } else {
    // wrong answer, deduct 10 second from timer
    totalTime -= 10;
    timeLeft.textContent = totalTime;
    answerCheck.textContent =
      "Wrong! The correct answer is: " + questions[questionIndex].answer;
  }

  questionIndex++;
  // repeat with the rest of questions
  if (questionIndex < questions.length) {
    nextQuestion();
  } else {
    // if no more question, run game over function
    gameOver();
  }
}

function chooseA() {
  checkAnswer(0);
}

function chooseB() {
  checkAnswer(1);
}

function chooseC() {
  checkAnswer(2);
}

function chooseD() {
  checkAnswer(3);
}

// when all questions are answered or timer reaches 0, game over
function gameOver() {
  summary.style.display = "block";
  questionDiv.style.display = "none";
  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "block";

  // show final score
  finalScore.textContent = correctAns;
}

// enter initial and store highscore in local storage
function storeHighScores(event) {
  event.preventDefault();

  // stop function is initial is blank
  if (initialInput.value === "") {
    alert("Please enter your initials!");
    return;
  }

  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
  highScoreSection.style.display = "block";

  // store scores into local storage
  var savedHighScores = localStorage.getItem("high scores");
  var scoresArray;

  if (savedHighScores === null) {
    scoresArray = [];
  } else {
    scoresArray = JSON.parse(savedHighScores);
  }

  var userScore = {
    initials: initialInput.value,
    score: finalScore.textContent,
  };

  console.log(userScore);
  scoresArray.push(userScore);

  // stringify array in order to store in local
  var scoresArrayString = JSON.stringify(scoresArray);
  window.localStorage.setItem("high scores", scoresArrayString);

  // show current highscores
  showHighScores();
}

// function to show high scores
var i = 0;
function showHighScores() {
  startDiv.style.display = "none";
  timer.style.display = "none";
  questionDiv.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
  highScoreSection.style.display = "block";

  var savedHighScores = localStorage.getItem("high scores");

  // check if there is any in local storage
  if (savedHighScores === null) {
    return;
  }
  console.log(savedHighScores);

  var storedHighScores = JSON.parse(savedHighScores);

  for (; i < storedHighScores.length; i++) {
    var eachNewHighScore = document.createElement("p");
    eachNewHighScore.innerHTML =
      storedHighScores[i].initials + ": " + storedHighScores[i].score;
    listOfHighScores.appendChild(eachNewHighScore);
  }
}

/**
 * ADD EVENT LISTENERS
 */

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function (event) {
  storeHighScores(event);
});

viewHighScore.addEventListener("click", function (event) {
  showHighScores(event);
});

goBackBtn.addEventListener("click", function () {
  startDiv.style.display = "block";
  highScoreSection.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function () {
  window.localStorage.removeItem("high scores");
  listOfHighScores.innerHTML = "High Scores Cleared!";
  listOfHighScores.setAttribute(
    "style",
    "font-family: 'Archivo', sans-serif; font-style: italic;"
  );
});
