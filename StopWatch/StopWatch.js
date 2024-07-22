let timedisplay = document.getElementById("timedisplay");
let timer = null;

let [seconds, minutes, hours] = [0, 0, 0];

function Watch () {
    seconds ++;
    if(seconds === 60){
        seconds = 0;
        minutes ++;
        if(minutes === 60){
            minutes = 0;
            hours ++;
        }
    }

    let s = seconds < 10?"0" + seconds : seconds;
    let m = minutes < 10?"0" + minutes : minutes;
    let h = hours < 10?"0" + hours : hours;

    timedisplay.innerHTML = h + " : " + m + " : " + s;
}

function StartWatch () {
    // if(timer !== null){
    //     clearInterval(timer);
    // }
    timer = setInterval(Watch, 1000);
}

function StopWatch () {
    clearInterval(timer);
}

function ResetWatch () {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];

    timedisplay.innerHTML = "00 : 00 : 00";
}