var scoreEl = document.getElementById('score');
var mainTextEl = document.getElementById('mainText');
var doneButton = document.querySelector("#done");

var score = localStorage.getItem("CurrentQuiz");


console.log(score);

scoreEl.textContent = "Your score: " + score;
mainTextEl.textContent = "Please enter you initials and click Done.";

// Event listener adapted from 22-Stu_Local-Storage and 
// 24-Stu_Local_Storage_Objects activities

doneButton.addEventListener("click", function(event) {
    event.preventDefault(); // ****Add same to main quiz script event listener?
    var initials = document.querySelector("#initials").value;
    if (initials === "") {
        alert("Error: Initials field cannot be blank");
    } else {
        // create user object from submission
        var scoreObj = {
            initials: initials,
            score: score
        };
        // store to local storage 
        localStorage.setItem("codeQuiz_"+initials, JSON.stringify(scoreObj));

        alert("Score recorded");
        window.location.href = './scores.html';
    }
});

//  // *******
 
//  doneButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     var initials = document.querySelector("#initials").value;

//     // create user object from submission
//     var scoreObj = {
//       initials: initials.value.trim(),
//       score: score
//     };
//     // store to local storage 
//     localStorage.setItem("codeQuiz_"+initials, JSON.stringify(scoreObj));
    
// });

