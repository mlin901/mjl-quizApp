// Place in doc for timer
var timerEl = document.getElementById('countdown');
// Place in doc for text [???????]
var mainEl = document.getElementById('main');
var bodyEl = document.getElementsByTagName('body');

// objects and variables for quiz questions
var q1 = {
    q: "How beautiful is Jane?", 
    answers: ["All of these", "Exceedingly", "Overwhelmingly", "Inordinately"],
    correct: 1
};
var q2 = {
    q: "How Hungry are the cats?", 
    answers: ["All of these", "Exceedingly", "Overwhelmingly", "Inordinately"],
    correct: 1
};
var q3 = {
    q: "How great is Mauser?", 
    answers: ["All of these", "Exceedingly", "Overwhelmingly", "Inordinately"],
    correct: 1
};
var questions = [q1, q2, q3];
var questionIndex = 0;

// Function to ask questions
function askQuestion() {
    mainEl.textContent = questions[questionIndex].q;
    console.log(questions[questionIndex].answers[0]);
    for (let i = 0; i < 4; i++) {
        var btn = document.createElement("button");  
        btn.id = "button" + i; 
        btn.innerHTML = questions[questionIndex].answers[i];                   
        document.body.appendChild(btn);  
    }
    questionIndex++;

    // On button click, present next question and result of last q.
    // Adapted from https://davidwalsh.name/event-delegate
    document.addEventListener("click",function(event) {
        // event.target was the clicked element
        if (event.target && event.target.matches("button")) {
            console.log("Excelsior!!!!!");
        }
    });
}

// Timer function (adapted from 10-Stu_timers-Intervals activity)
function countdown() {
  var timeLeft = 3;
  timerEl.textContent = timeLeft;
  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      quizOver();
    }
  }, 1000);
}

// When time's up or all questions have been asnwered...
function quizOver() {
    window.location.href = './quizover.html';
}

askQuestion();
countdown();
