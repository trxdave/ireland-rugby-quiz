const questionContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-button");

const question = [{
    question: "Which player scored the most tries in the 2014 tournament?",
    answer: [
    {option1: "Andrew Trimble", correct: false},
    {option2: "Johnny Sexton", correct: true},
    {option3: "Rob Kearney", correct: false},
    {option4: "Ronan O'Gara", correct: false},
    ]
},
    {   
    question: "Where did Ireland finish on the table in 2005?",
    answer: [
    {option1: "2nd", correct: false},
    {option2: "3rd", correct: true},
    {option3: "4th", correct: false},
    {option4: "1st", correct: false},
    ]
},

    {
    question: "What was the final score of Ireland's Grand Slam winning match against Wales in 2009?",
    answer: [
    {option1: "14-16", correct: false},
    {option2: "16-18", correct: false}, 
    {option3: "15-17", correct: true},
    {option4: "19-21", correct: false},
    ]
},

    {
    question: "Who did Ireland play in their very first Six Nations game back in 2000?",
    answer: [
    {option1: "Scotland", correct: false},
    {option2: "Wales", correct: false},
    {option3: "France", correct: false},
    {option4: "England", correct: true},
    ]
    },

    {
    question: "Who were Ireland playing in the 2007 final round before France denied them a championship on points difference?",
    answer: [
    {option1: "Italy", correct: true},
    {option2: "Scotland", correct: false},
    {option3: "Wales", correct: false},
    {option4: "France", correct: false},
    ]
    },

    {
    question: "Who scored Ireland's only try when they beat England in Twickenham in 2004?",
    answer: [
    {option1: "Brian O'Driscoll", correct: false},
    {option2: "Girvan Dempsey", correct: true},
    {option3: "Shane Horgan", correct: false},
    {option4: "Paul O'Connell", correct: false},
    ]
    },

    {
    question: "How many games did Ireland win in the 2008 tournament?",
    answer: [
    {option1: "Two", correct: true},
    {option2: "Three", correct: false},
    {option3: "Four", correct: false},
    {option4: "One", correct: false},
    ]
    },

    {
    question: "Who ended up playing on the wing against Italy in 2013?",
    answer: [
    {option1: "Sean Cronin", correct: false},
    {option2: "Peter O'Mahony", correct: true},
    {option3: "Sean O'Brien", correct: false},
    {option4: "Paul O'Connell", correct: false},
    ]
    },

    {
    question: "Who won Player of The Championship in 2010?",
    answer: [
    {option1: "Tommy Bowe", correct: true},
    {option2: "Paul O'Connell", correct: false},
    {option3: "Brian O'Driscoll", correct: false},
    {option4: "Johnny Sexton", correct: false},
    ]
    },

    {
    question: "In what was Ireland's game against France postponed due to frost?",
    answer: [
    {option1: "2010", correct: false},
    {option2: "2011", correct: false},
    {option3: "2012", correct: true},
    {option4: "2009", correct: false},
    ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-btn");
        answerButton.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

startQuiz();



