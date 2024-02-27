/* jshint esversion: 11 */

const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-button");

//* Seconds

let timeLeft = 60;
let score = 0;

function updateTimeAndScore() {
  document.getElementById('current-time').textContent = timeLeft;
  document.getElementById('current-score').textContent = score;
}

function startCountdown() {
  timeLeft = 60;
  updateTimeAndScore();
  const timer = setInterval(() => {
    timeLeft--;
    updateTimeAndScore();

    if (timeLeft === 0) {
      clearInterval(timer);
      alert('Time is up!');
      
      location.reload();
    }
  }, 1000);
}

document.getElementById('next-button').addEventListener('click', () => {
  
});

startCountdown();

//* Start Quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    handleNextButton();

    console.log(startQuiz);
}

//* Show Question

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 0;
    console.log(questionNo);

    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;
    console.log(currentQuestion);

//* Show Answer
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.option;
        button.classList.add("answer-btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        answerButton.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
    console.log(resetState);
}

//* Show Answer correct or incorrect

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    }
console.log(selectAnswer);

//* Show Scores
function showScores() {
    var gameOverHTML = "<h1>Congraltions your Result!!</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + score + "</h2>";
    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

    if (!question) {
        console.log("Quiz object or score not found.");
        return;
    }
}

//* Next Button
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScores();
    }

    console.log(handleNextButton);
    }

nextButton.addEventListener("click", ()=>{
        if (currentQuestionIndex < question.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });

startQuiz();
