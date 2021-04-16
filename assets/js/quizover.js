var scoreEl = document.getElementById('score');
var mainTextEl = document.getElementById('mainText');
var doneButton = document.querySelector("#done");
var msgDiv = document.querySelector("#msg");

var score = localStorage.getItem("CurrentQuiz");


console.log(score);

scoreEl.textContent = "Your score: " + score;
mainTextEl.textContent = "Please enter you initials and click Done.";

// displayMessage functon and event listener adapted from 
// 22-Stu_Local-storage activity

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

doneButton.addEventListener("click", function(event) {
    event.preventDefault(); // ****Add same to main quiz script event listener?
  
    var initials = document.querySelector("#initials").value;
  
    if (initials === "") {
      displayMessage("error", "Initials field cannot be blank");
    } else {
      displayMessage("success", "Score recorded");
      localStorage.setItem(initials, score);
    //   renderLastRegistered();
    }
    window.location.href = './scores.html';

  });

