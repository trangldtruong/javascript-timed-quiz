var timeEl = document.querySelector(".timer");
var timeLeft = 59;
function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();

    }
    }, 1000);
}
function sendMessage() {
    timeEl.textContent = "times up";

}
setTime();