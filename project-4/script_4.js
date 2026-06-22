const randomNumber = Math.floor(Math.random() * 100) + 1;

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const msg = document.getElementById("message");
const attempts = document.getElementById("attempts");

let attempt_counter = 0; 

submit.addEventListener('click', function(){

    const user = Number(guess.value);
    attempt_counter++;

    if(user === randomNumber){
        console.log("correct");
        msg.textContent = "yay!"
        attempts.textContent = `Attempts: ${attempt_counter}`;
    }
     else if (user < randomNumber) {
        msg.textContent = "Too low!";
        attempts.textContent = `Attempts: ${attempt_counter}`;
            if(attempt_counter>5){
            msg.textContent = `Game Over! The correct answer was ${randomNumber}`;
            }
    }
    else {
        msg.textContent = "Too high!";
        attempts.textContent = `Attempts: ${attempt_counter}`;
            if(attempt_counter>5){
            msg.textContent = `Game Over! The correct answer was ${randomNumber}`;
            }
    }

    

    

});