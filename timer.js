var minutes = 25
var seconds = 0
var startClicked = false
var endClicked = false
var interval;

function secondsLeft() {
    if (seconds == 0) {
        seconds = 59;
        minutes--;
    }

    else {
        seconds--;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    document.getElementById("second").innerHTML = ":" + seconds;
    document.getElementById("minute").innerHTML = minutes;  
}

function startClick() {
    if (!startClicked) {
        interval = setInterval(secondsLeft, 1000);
        document.getElementById("startButton").innerHTML = "start pressed";
        startClicked = true;
    }

    else {
        clearInterval(interval);
        document.getElementById("startButton").innerHTML = "Start";
        startClicked = false;
    }
}

function startClick() {
    if (!startClicked) {
        interval = setInterval(secondsLeft, 1000);
        startClicked = true;
    }

    else {
        clearInterval(interval);
        startClicked = false;
    }
}

function endClick() {
    if (!endClicked) {
        endClicked = true;
        clearInterval(interval);
    }

    else {
        endClicked = false;
    }
}

// document.getElementById("button").disabled = false;
// document.getElementById("button1").innerHTML = minutes;


