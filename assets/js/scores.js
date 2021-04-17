var scoreListEl = document.querySelector("#scoreList");
var orderNoteEl = document.querySelector("#orderNote");


var scores = JSON.parse(localStorage.getItem("quizScores"));
if (scores) {
    orderNoteEl.textContent = "List starts with most recent score.";    
} else {
    orderNoteEl.textContent = "No scores available.";
}


for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    var li = document.createElement("li");
    li.textContent = "User: " + scores[i].initials + ", Score: " +  scores[i].score;
    li.setAttribute("data-index", i);

    scoreListEl.appendChild(li);
  }



// localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// renderMessage();

// });

// function renderMessage() {
//   var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//   if (lastGrade !== null) {
//     document.querySelector(".message").textContent = lastGrade.student + 
//     " received a/an " + lastGrade.grade
//   }
// }