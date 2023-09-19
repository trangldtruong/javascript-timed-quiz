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

const quizContent = [
    {
        question: "Which of the following methods is used to access HTML element using Javascript?",
        answers: ["A.getElementbyId()", 
        "B.getElementsByClassName()", 
        "C.Both A and B", 
        "D.None of the above"], 
        correctAnswer: "C.Both A and B"
    },
    {
        question: "What is JavaScript?",
        answers: ["A.JavaScript is a scripting language used to make the website interactive", 
        "B.JavaScript is an assembly language used to make the website interactive", 
        "C.JavaScript is a compiled language used to make the website interactive", 
        "D.None of the above"],
        correctAnswer: "A.JavaScript is a scripting language used to make the website interactive"
        
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answers: ["A.It is an ordered list of values",
        "B.It is an ordered list of objects",
        "C.It is an ordered list of string",
        "D.It is an ordered list of functions"],
        correctAnswer: "A.It is an ordered list of values"
    },
    {
        question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        answers: ["A.Position", "B.Window", "C.Standard", "D.Location"],
        correctAnswer: "B.Window"
        
    },
    {
        question: "Which is the correct jQuery selector to select current HTML element?",
        answers: ["A.$(this)","B.$(cur)", "C.$(.this)", "D.$(#this)"],
        correctAnswer: "A.$(this)" 
    }
];
const questionElement = document.getElementById("question")
const answerElement = document.getElementsByClassName("answers")
const submitButton = document.getElementById("submit-button")

   