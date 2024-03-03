/* jshint esversion: 11 */

const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-button");

//* Seconds and Score *//

let timeLeft = 120;
let score = 0;

function updateTimeAndScore() {
    const currentTimeElement = document.getElementById('current-time');
    const currentScoreElement = document.getElementById('current-score');
  
    if (currentTimeElement && currentScoreElement) {
      currentTimeElement.textContent = timeLeft;
      currentScoreElement.textContent = score;
    } else {
      timeLeft.score('current-time or current-score element not found');
    }
  }

function startCountdown() {
  timeLeft = 120;
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

startCountdown();

document.getElementById('next-button');

//* Start Quiz *//

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
        
    
}

//* Show Question *//

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    

    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;
    

//* Show Answer *//

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
    
}

//* Show Answer correct or incorrect *//

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


//* Show Scores *//

function showScores() {
    var gameOverHTML = "<h2>Congratuations your Result!!</h2>";
    gameOverHTML += "<h2 id='score'> Your scores: " + score + "</h2>";
    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

    if (!question) {
        nextButton.gameOver("Quiz object or score not found.");
        return;
    }
    
}

//* Next Button *//

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScores();
    }

    
    }

nextButton.addEventListener("click", ()=>{
        if (currentQuestionIndex < question.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });


startQuiz();