let hours = 0;
let minutes = 0;
let seconds = 0;

let status = "stopped";

let interval = null;

function stopWatch() {
    seconds ++;
    if(seconds/60==1){
        seconds = 0;
        minutes ++;
    }
    if (minutes/60==1){
        minutes = 0;
        hours ++;
    }
    function prependZero(num){
        return (num>=10)?num:`0${num}`
    }

    return document.getElementById("stopwatch").innerHTML = prependZero(hours) + ":" + prependZero(minutes) + ":" + prependZero(seconds);
}

document.getElementById("start__button").addEventListener("click", ()=>{
    if(status != "started"){
        interval = window.setInterval(stopWatch, 1000);
        status = "started";
    }
});

document.getElementById("stop__button").addEventListener("click", ()=>{
    document.getElementById("stopwatch").innerHTML = "00:00:00";
    window.clearInterval(interval);
    status = "stopped";
    seconds = 0;
    hours = 0;
    minutes = 0;
});

document.getElementById("reset__button").addEventListener("click", ()=>{
    document.getElementById("stopwatch").innerHTML = "00:00:00";
    seconds = 0;
    hours = 0;
    minutes = 0;
});
