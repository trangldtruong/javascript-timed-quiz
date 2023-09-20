var timeEl = document.querySelector(".timer");
var timeLeft = 59;
var timerInterval;
function setTime() {
    timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;
    if((timeLeft === 0) || (currentQuestionIndex > quizContent.length)) {
        clearInterval(timerInterval);
        sendMessage();
        
    };
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
//get html elements
var questionElement = document.getElementById("question");
var answerElement = document.getElementById("answer");
var submitButton = document.getElementById("submit-button");
let currentQuestionIndex = 0;
let score = 0;
function showQuestion() {
    let currentQuestion = quizContent[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerElement.innerHTML = "";
    currentQuestion.answers.forEach(answers => {
        let li = document.createElement("button");
        li.textContent = answers;
        answerElement.appendChild(li);  
    });
}
  // Function to check the selected answer
  function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
   // console.log("selectedAnswer", selectedAnswer)
    const currentQuestion = quizContent[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizContent.length) {
      showQuestion();
    } else {
      clearInterval(timerInterval);
      alert(`Quiz completed! You score ${score} out of ${quizContent.length}`);
    }
  };

  answerElement.addEventListener("click", checkAnswer);
  showQuestion();
//store high scores
/* .localStorage() check local storage 
sort any saved scores 
put saved sorted scores in the html */

