var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var questions = ["a", "b", "c", "d"];
var questionIndex = 0;

function askQuestions() {
    for (let index = 0; index < questions.length; index++) {
        const element = array[index];
        
    }
    // Original version:
    // mainEl.textContent=questions[questionIndex];
    // questionIndex++;
}

// Adapted from 10-Stu_timers-Intervals
function countdown() {
  var timeLeft = 3;

  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timerEl.textContent = timeLeft + ' blah--';
      timeLeft--;
      askQuestions();
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

countdown();
