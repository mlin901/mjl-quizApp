// Place in doc for timer
var timerEl = document.getElementById('countdown');
// Place in doc for text [???????]
var mainEl = document.getElementById('main');
var bodyEl = document.getElementsByTagName('body');

// objects and variables for quiz questions
var q1 = {
    q: "First queastion", 
    answers: ["All of these", "Exceedingly", "Overwhelmingly", "Inordinately"],
    correct: "button0"
};
var q2 = {
    q: "Second question", 
    answers: ["1", "2", "3", "4"],
    correct: "button0"
};
var q3 = {
    q: "Third question", 
    answers: ["A", "B", "C", "D"],
    correct: "button0"
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
  var timeLeft = 10;
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
    console.log(clickedBtn);
    console.log(questions[questionIndex].correct);
    if (clickedBtn == questions[questionIndex].correct) {
        console.log("Oh, heck yeah");
    } else {
        console.log("Nooooo");
    }
}

// On button click, present next question and result of last q.
// Adapted from https://davidwalsh.name/event-delegate
document.addEventListener("click",function(event) {
    // event.target was the clicked element
    if (event.target && event.target.matches("button")) {
        console.log("Excelsior!!!!! " + event.target.id); //**** */
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
