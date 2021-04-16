var timeLeft = 10;
// Place in doc for timer
var timerEl = document.getElementById('countdown');
// Place in doc for text [???????]
var mainEl = document.getElementById('main');
var feedbackEl = document.getElementById('feedback');

// objects and variables for quiz questions
var q1 = {
    q: "First queastion", 
    answers: ["correct", "Exceedingly", "Overwhelmingly", "Inordinately"],
    correct: "button0"
};
var q2 = {
    q: "Second question", 
    answers: ["1", "correct", "3", "4"],
    correct: "button1"
};
var q3 = {
    q: "Third question", 
    answers: ["A", "B", "Correct", "D"],
    correct: "button2"
};
var q4 = {
    q: "Fourth question", 
    answers: ["alph", "Beta", "gamma", "correct"],
    correct: "button3"
};
var questions = [q1, q2, q3];
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
            // If button exists...
            if (ifBtn !== null) {
                ifBtn.innerHTML = questions[questionIndex].answers[i];   //***                 
            } else {  //If button doesn't yet exist...
                var ifBtn = document.createElement("button");  
                ifBtn.id = "button" + i;
                ifBtn.innerHTML = questions[questionIndex].answers[i];  // *****                 
                document.body.appendChild(ifBtn);  // *****
            }
        }
    } else {  // If there are no more questions...
        quizOver(); // ****really? 
    }
    questionIndex++;
    // return
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

// Did they click the right answer?
function evaluateAnswer(clickedBtn) {
    // console.log(clickedBtn);
    // console.log(questions[questionIndex-1].correct);

    // If answer is correct...
    if (clickedBtn == questions[questionIndex-1].correct) {
        console.log("Oh, heck yeah");
        // ***** Display a "correct" message
        feedbackEl.textContent = "Correct!";
        // increment counter for correct answers

    } else { // If answer is wrong...
        console.log("Nooooo");
        // Display an "incorrect message"
        feedbackEl.textContent = "Wrong!";
        // Remove 5 seconds from timer
        timeLeft = timeLeft - 3;
    }
}

// On button click, present next question and result of last q.
// Adapted from https://davidwalsh.name/event-delegate
document.addEventListener("click",function(event) {
    // event.target was the clicked element
    if (event.target && event.target.matches("button")) {
        // console.log("Excelsior!!!!! " + event.target.id); 
        evaluateAnswer(event.target.id);
        askQuestion();
    }
});

// When time's up or all questions have been asnwered...
function quizOver() {
    window.location.href = './quizover.html';
}

askQuestion();
countdown();
