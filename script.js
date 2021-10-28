var p1Score = 0; //a var to hold the score of the player 1
var p2Score = 0; //a var to hold the score of the player 1
var scoreLimitNum = 7; //the score limit var to hold the score limit that was decided by the user
var whichP; // a var to hold which player won

// a group of variable to manipulate different areas of the example
var scoreLimit = document.getElementById("game");
var p1ScoreArea = document.getElementById("p1");
var p2ScoreArea = document.getElementById("p2");

var p1Btn = document.getElementById("p1-btn");
var p2Btn = document.getElementById("p2-btn");
var resetBtn = document.getElementById("reset");

// copied
// This is to manipulate the div that contains the wining message
var x = document.getElementById("myDIV");
x.textContent = "Game going on...";

// The p tags that contains each players score
p1ScoreArea.textContent = p1Score;
p2ScoreArea.textContent = p2Score;

// the reset button that resets the game
// the score and the message will be reset
// the disabled buttons will be enabled again
resetBtn.addEventListener("click", () => {
    x.textContent = "Game going on...";
    p1Score = 0;
    p2Score = 0;
    p1ScoreArea.textContent = p1Score;
    p2ScoreArea.textContent = p2Score;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    evaluateScore();
});

// Player one increment score button
p1Btn.addEventListener("click", () => {
    p1Score++;
    p1ScoreArea.textContent = p1Score;
    evaluateScore(); // evaluate score to check which one is winning
    // the winning players score will be displayed in green.
    isWin(); //to check if the score limit is reached and the player won
});

p2Btn.addEventListener("click", () => {
    p2Score++;
    p2ScoreArea.textContent = p2Score;
    evaluateScore();
    isWin();
});

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

// a function to check who is winning
// if any player won, the won message will be displayed
// the player buttons will be disabled
function isWin() {
    if (p1Score == scoreLimitNum) {
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        whichP = "Player 1 won.";
        x.textContent = whichP;
        p1Btn.disabled = true;
        p2Btn.disabled = true;
    } else if (p2Score == scoreLimitNum) {
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        whichP = "Player 2 won.";
        x.textContent = whichP;
        p1Btn.disabled = true;
        p2Btn.disabled = true;
    }
}

// resets the score, the p tag that holds the score,
// and the buttons will be enabled again
function resetAll() {
    p1Score = 0;
    p2Score = 0;
    p1ScoreArea.textContent = p1Score;
    p2ScoreArea.textContent = p2Score;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    evaluateScore();
}

// Function to change the score limit
// once the score limit is changed
// the global variable will be changed as well
function changeScoreLimit() {
    scoreLimitNum = scoreLimit.value;
    x.textContent = "Game going on...";
    resetAll();
}