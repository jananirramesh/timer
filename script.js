let timerDisplay = document.getElementById("timer");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

let timerInterval;
let elapsedTime = 0;
let isRunning = false;

/* Update Timer Display */
function updateTimerDisplay() {
    let minutes = Math.floor(elapsedTime / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = elapsedTime % 1000;

    timerDisplay.textContent = 
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}:` +
        `${milliseconds.toString().padStart(3, '0')}`;
}

/* Start the Timer */
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        let startTime = Date.now() - elapsedTime;

        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateTimerDisplay();
        }, 10);
    }
}

/* Pause the Timer */
function pauseTimer() {
    isRunning = false;
    clearInterval(timerInterval);
}

/* Reset the Timer */
function resetTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateTimerDisplay();
}

/* Event Listeners */
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

/* Initialize Timer Display */
updateTimerDisplay();
