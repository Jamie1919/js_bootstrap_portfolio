var secret = Math.floor((Math.random() * 10 ) + 1);
var active = true;

// var startButton = document.getElementById("guess");
// startButton.onclick = askQuestion();

function askQuestion(){
    var guess = prompt("Please guess number a number between 1 to 10");
    checkAnswer(guess);
}

function checkAnswer(guess) {
    while (active) {
        if (guess == secret) {
            alert("Correct answer")
            active = false;
            reloadPage();
        }else if (guess < secret) {
            alert("Answer is Incorrect too small")
            askQuestion();
        }else if (guess > secret) {
            alert("Answer is Incorrect too big")
            askQuestion();
        } else { 
            alert("Invalid input! input number");
            askQuestion();

        }
    }
}

 function reloadPage(){
     window.location.reload();
 }

         
    













