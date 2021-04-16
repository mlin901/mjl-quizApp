var timeLeft = 30; // Timer variable
var correctAnswers = 0; // Number of correct answers
var timerEl = document.getElementById('countdown'); // Timer location
var mainEl = document.getElementById('main'); // Question text location
var feedbackEl = document.getElementById('feedback'); // Location for "correct" or "wrong"

// Objects for questions and possible answers
// Questions adapted from From https://www.w3schools.com/js/js_quiz.asp
var q1 = {
    q: "Which HTML tag do we use for JavaScript?", 
    answers: ["&lt;scripting&gt;", "&lt;js&gt;", "&lt;javascript&gt;", "&lt;script&gt;"],
    correct: "button3"
};
var q2 = {
    q: "Which is the correct syntax for linking to an external script?", 
    answers: ["&lt;script src=\"xxx.js\"&gt;", "&lt;script href=\"xxx.js\"&gt;", "&lt;script name=\"xxx.js\"&gt;", "&lt;script id=\"xxx.js\"&gt;"],
    correct: "button0"
};
var q3 = {
    q: "How do you code an alert box?", 
    answers: ["alertBox(\"Alert message!\");", "alert(\"Alert message!\");", "msg(\"Alert message!\");", "msgBox(\"Alert message!\");"],
    correct: "button1"
};
var q4 = {
    q: "What did the Thunder say?", 
    answers: ["DA", "Datta", "Dayadhvam", "Damyata"],
    correct: "button0"
};
var q5 = {
    q: "Which of the following is a correctly-coded if statement test?", 
    answers: ["if i = 1 then", "if i == 1 then", "if (i == 1)", "if i = 1"],
    correct: "button2"
};

// Array and index for questions  
var questions = [q1, q2, q3, q4, q5];
var questionIndex = 0;

// Function to ask questions
function askQuestion() {
    // If there's another question...
    if (questionIndex < questions.length) {
        // Add question text to page
        mainEl.textContent = questions[questionIndex].q;
        // Add buttons for mult-choice questions to page
        for (let i = 0; i < questions[questionIndex].answers.length; i++) {
            var ifBtn = document.getElementById("button"+i);
            // If button already exists...
            if (ifBtn !== null) {
                ifBtn.innerHTML = questions[questionIndex].answers[i];                 
            } else {  //If button doesn't yet exist...
                var ifBtn = document.createElement("button");  
                ifBtn.id = "button" + i;
                ifBtn.innerHTML = questions[questionIndex].answers[i];                 
                document.body.appendChild(ifBtn); 
            }
        }
    }
    // Increment index so function acts on the next question 
    questionIndex++;
    // return   // *****???????
}

// Timer function (adapted from 10-Stu_timers-Intervals activity)
function countdown() {
  timerEl.textContent = timeLeft;
  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
    //   timerEl.textContent = '';
      clearInterval(timeInterval);
      quizOver();
    }
  }, 1000);
}

// Determine if user clicked the correct answer
function evaluateAnswer(clickedBtn) {
    // If answer is correct...
    if (clickedBtn == questions[questionIndex-1].correct) {
        feedbackEl.textContent = "Correct!";
        // Increment counter for correct answers 
        correctAnswers++;
    } else {   // If answer is wrong...
        feedbackEl.textContent = "Answer is incorrect.";
        // Remove a few seconds from timer for wrong answer
        timeLeft = timeLeft - 2;
    }
    // If we haven't already evaluated the last question...
    // Display next question
    if (questionIndex < questions.length) {
        askQuestion();
    } else {    // If we've evaluated the last question, quit
        quizOver();
    } 
}

// On button click, call function to evaluate answer (clicked button)
// (Adapted from https://davidwalsh.name/event-delegate)
document.addEventListener("click",function(event) {
    // event.target was the clicked element
    // If the click is on a button...
    if (event.target && event.target.matches("button")) { 
        evaluateAnswer(event.target.id);  
    } 
});

// When time's up or all questions have been answered...
function quizOver() {
    localStorage.setItem("CurrentQuiz", correctAnswers);
    // setTimeout(function(){ window.location.href = './quizover.html'; }, 800); // Brief pause before leaving page
    window.location.href = './quizover.html'; // **************
}

countdown();
askQuestion();
