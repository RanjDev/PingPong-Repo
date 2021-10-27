var p1Score = 0;
var p2Score = 0;
var scoreLimitNum = 7;

var scoreLimit = document.getElementById("game");
var p1ScoreArea = document.getElementById("p1");
var p2ScoreArea = document.getElementById("p2");

var p1Btn = document.getElementById("p1-btn");
var p2Btn = document.getElementById("p2-btn");
var resetBtn = document.getElementById("reset");

p1ScoreArea.textContent = p1Score;
p2ScoreArea.textContent = p2Score;

resetBtn.addEventListener("click", () => {
    p1Score = 0;
    p2Score = 0;
    p1ScoreArea.textContent = p1Score;
    p2ScoreArea.textContent = p2Score;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    evaluateScore();
});

p1Btn.addEventListener("click", () => {
    p1Score++;
    p1ScoreArea.textContent = p1Score;
    evaluateScore();
    isWin();
});

p2Btn.addEventListener("click", () => {
    p2Score++;
    p2ScoreArea.textContent = p2Score;
    evaluateScore();
    isWin();
});

evaluateScore();
// Evaluate score to change the color of the points based on who is winning
function evaluateScore() {
    if (p1Score === p2Score) {
        p1ScoreArea.style.color = "black";
        p2ScoreArea.style.color = "black";
    } else if (p1Score > p2Score) {
        p1ScoreArea.style.color = "green";
        p2ScoreArea.style.color = "red";
    } else if (p1Score < p2Score) {
        p1ScoreArea.style.color = "red";
        p2ScoreArea.style.color = "green";
    }
}

function isWin() {
    // TODO: TO add soome effect when either player won
    if (p1Score == scoreLimitNum) {
        console.log(" P1 WIN ");
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        resetAll();
    } else if (p2Score == scoreLimitNum) {
        console.log(" P2 WIN ");
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        resetAll();
    }
}

function resetAll() {
    p1Score = 0;
    p2Score = 0;
    p1ScoreArea.textContent = p1Score;
    p2ScoreArea.textContent = p2Score;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    evaluateScore();
}

function changeScoreLimit() {
    scoreLimitNum = scoreLimit.value;
    resetAll();
}