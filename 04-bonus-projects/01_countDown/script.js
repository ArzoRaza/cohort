const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton'); 
const resumeButton = document.getElementById('resumeButton'); 
const timeInput = document.getElementById('timeinput');
const countdownDisplay = document.getElementById('countdownDisplay');

let timer;
let valueInSeconds;
let isPaused = false; 

function startTimer() {
    valueInSeconds = parseInt(timeInput.value);

    if (isNaN(valueInSeconds)) {
        countdownDisplay.innerText = "Please enter a valid number";
        return;
    }

    if (valueInSeconds <= 0) {
        countdownDisplay.innerText = "Please enter seconds > 0";
        return;
    }

    startButton.disabled = true; 
    pauseButton.disabled = false; 
    resumeButton.disabled = true; 

    timer = setInterval(() => {
        if (!isPaused) {
            valueInSeconds--;
            countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`;

            if (valueInSeconds <= 0) {
                clearInterval(timer);
                countdownDisplay.innerText = "Time finished ⏳";
                startButton.disabled = false; 
                pauseButton.disabled = true;
                resumeButton.disabled = true;
            }
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = true;
    clearInterval(timer); 
    pauseButton.disabled = true;
    resumeButton.disabled = false; 
}

function resumeTimer() {
    isPaused = false;
    pauseButton.disabled = false;
    resumeButton.disabled = true;

    timer = setInterval(() => {
        if (!isPaused) {
            valueInSeconds--;
            countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`;

            if (valueInSeconds <= 0) {
                clearInterval(timer);
                countdownDisplay.innerText = "Time Finished ⏳";
                startButton.disabled = false;
                pauseButton.disabled = true;
                resumeButton.disabled = true;
            }
        }
    }, 1000);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resumeButton.addEventListener('click', resumeTimer);
