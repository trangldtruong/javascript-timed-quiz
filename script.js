var timeEl = document.querySelector(".timer");
var timeLeft = 59;
function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();

    }
    }, 1000);
}
function sendMessage() {
    timeEl.textContent = "times up";

}
setTime();

const questionElement = document.getElementById("questions")
const answerButton = document.getElementsByClassName("choice")
var nextButton = document.getElementById("next-button")
const questions = [
    {
        question: "Which of the following methods is used to access HTML element using Javascript?",
        answers: [
            {text: "A.getElementbyId()", correct: false},
            {text: "B.getElementsByClassName()", correct: false},
            {text: "C.Both A and B", correct: true},
            {text: "D.None of the above", correct: false},
        ]
    },
    {
        question: "What is JavaScript?",
        answers: [
            {text: "A.JavaScript is a scripting language used to make the website interactive", correct: true},
            {text: "B.JavaScript is an assembly language used to make the website interactive", correct: false},
            {text: "C.JavaScript is a compiled language used to make the website interactive", correct: false},
            {text: "D.None of the above", correct: false},
        ]
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answers: [
            {text: "A.It is an ordered list of values", correct: true },
            {text: "B.It is an ordered list of objects", correct: false},
            {text: "C.It is an ordered list of string", correct: false},
            {text: "D.It is an ordered list of functions", correct: false},
        ]
    },
    {
        question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        answers: [
            {text: "A.Position", correct: false},
            {text: "B.Window", correct: true},
            {text: "C.Standard", correct: false},
            {text: "D.Location", correct: false},
        ]
    },
    {
        question: "Which is the correct jQuery selector to select current HTML element?",
        answers: [
            {text: "A.$(this)", correct: true},
            {text: "B.$(cur)", correct: false},
            {text: "C.$(.this)", correct: false},
            {text: "D.$(#this)", correct: false}
        ]
    }
];

    