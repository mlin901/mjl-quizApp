var scoreEl = document.getElementById('score');
var mainTextEl = document.getElementById('mainText');
var score = localStorage.getItem("CurrentQuiz");

console.log(score);

scoreEl.textContent = "Your score: " + score;
mainTextEl.textContent = "Please enter you initials and click Done.";
