var scoreEl = document.getElementById('score');
var mainTextEl = document.getElementById('mainText');
var doneButton = document.querySelector("#done");
var initialsForm = document.querySelector("#initials");

var score = localStorage.getItem("CurrentQuiz");
var items = [];


// console.log(score);

scoreEl.textContent = "Your score: " + score; 
mainTextEl.textContent = "Please enter your initials and press Return/Enter.";

// Event listener adapted from 22-Stu_Local-Storage, 24-Stu_Local_Storage_Objects,
// and 26-Stu_Local-Storage-Todos activities

doneButton.addEventListener("click", function(event) {
    event.preventDefault(); // ****Add same to main quiz script event listener?
    var initials = document.querySelector("#initials").value;
    if (initials === "") {
        alert("Error: Initials field cannot be blank");
    } else {
        // Create user object from submission
        var scoreObj = {
            initials: initials,
            score: score
        };
        // Store to local storage 
        items.push(scoreObj);
        // initials.value = "";

        // Get existing scores from local storage, add new score and store
        var existingScores = JSON.parse(localStorage.getItem("quizScores"));
        if (existingScores) {

            // items.push(existingScores);
            var concat = items.concat(existingScores);
            // var concat = existingScores.concat(items); 
            localStorage.setItem("quizScores", JSON.stringify(concat));
        } else {
            localStorage.setItem("quizScores", JSON.stringify(items));
        }

        // alert("Score recorded");
        window.location.href = './scores.html';
    }
});


