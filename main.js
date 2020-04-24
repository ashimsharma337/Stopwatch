var seconds = 0;
var minutes = 0;
var hours = 0;
var display = document.getElementById("clockDisplay");


var displayseconds = 0;
var displayminutes = 0;
var displayhours = 0;

var interval = "null";
var status = "stopped";
var startbtn = document.getElementById("startStop");
var resetbtn = document.getElementById("reset");



function myStopwatch(){
    seconds++;
    if(seconds/60 == 1){
        seconds = 0;
        minutes++;

    if(minutes/60 == 1){
        minutes = 0;
        hours++;
    }

    }

    if(seconds<10){
        displayseconds = "0"+seconds.toString();
    }
    else{
        displayseconds = seconds;
    }
    if(minutes<10){
        displayminutes = "0"+minutes.toString();
    }
    else{
        displayminutes = minutes;
    }
    if(hours<10){
        displayhours = "0"+hours.toString();
    }
    else{
        displayhours = hours;
    }

   display.innerHTML = displayhours+":"+displayminutes+":"+displayseconds;
}


function startStop(){

    if(status === "stopped"){
     
    interval = window.setInterval(myStopwatch, 1000);
    startbtn.innerHTML = "Stop";
    status = "started";   
    }
    else{
    window.clearInterval(interval);
    startbtn.innerHTML = "Start";
    status = "stopped";
    
    }
}

function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.innerHTML = "00:00:00";
    startbtn.innerHTML = "Start";
}

