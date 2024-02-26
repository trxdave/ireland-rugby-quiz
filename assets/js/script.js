/* jshint esversion: 11 */

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-button");

//* Questions
const question = [ {
    question: "Which player scored the most tries in the 2014 tournament?",
    answer: [
    {option: "Andrew Trimble", correct: false},
    {option: "Johnny Sexton", correct: true},
    {option: "Rob Kearney", correct: false},
    {option: "Ronan O'Gara", correct: false},
    ]
},
    {   
    question: "Where did Ireland finish on the table in 2005?",
    answer: [
    {option: "2nd", correct: false},
    {option: "3rd", correct: true},
    {option: "4th", correct: false},
    {option: "1st", correct: false},
    ]
},

    {
    question: "What was the final score of Ireland's Grand Slam winning match against Wales in 2009?",
    answer: [
    {option: "14-16", correct: false},
    {option: "16-18", correct: false}, 
    {option: "15-17", correct: true},
    {option: "19-21", correct: false},
    ]
},

    {
    question: "Who did Ireland play in their very first Six Nations game back in 2000?",
    answer: [
    {option: "Scotland", correct: false},
    {option: "Wales", correct: false},
    {option: "France", correct: false},
    {option: "England", correct: true},
    ]
    },

    {
    question: "Who were Ireland playing in the 2007 final round before France denied them a championship on points difference?",
    answer: [
    {option: "Italy", correct: true},
    {option: "Scotland", correct: false},
    {option: "Wales", correct: false},
    {option: "France", correct: false},
    ]
    },

    {
    question: "Who scored Ireland's only try when they beat England in Twickenham in 2004?",
    answer: [
    {option: "Brian O'Driscoll", correct: false},
    {option: "Girvan Dempsey", correct: true},
    {option: "Shane Horgan", correct: false},
    {option: "Paul O'Connell", correct: false},
    ]
    },

    {
    question: "How many games did Ireland win in the 2008 tournament?",
    answer: [
    {option: "Two", correct: true},
    {option: "Three", correct: false},
    {option: "Four", correct: false},
    {option: "One", correct: false},
    ]
    },

    {
    question: "Who ended up playing on the wing against Italy in 2013?",
    answer: [
    {option: "Sean Cronin", correct: false},
    {option: "Peter O'Mahony", correct: true},
    {option: "Sean O'Brien", correct: false},
    {option: "Paul O'Connell", correct: false},
    ]
    },

    {
    question: "Who won Player of The Championship in 2010?",
    answer: [
    {option: "Tommy Bowe", correct: true},
    {option: "Paul O'Connell", correct: false},
    {option: "Brian O'Driscoll", correct: false},
    {option: "Johnny Sexton", correct: false},
    ]
    },

    {
    question: "In what was Ireland's game against France postponed due to frost?",
    answer: [
    {option: "2010", correct: false},
    {option: "2011", correct: false},
    {option: "2012", correct: true},
    {option: "2009", correct: false},
    ]
    },
];

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
    let questionNo = currentQuestionIndex + 1;
    console.log(questionNo);

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
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
