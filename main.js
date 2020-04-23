var seconds = 0;
var minutes = 0;
var hours = 0;
var display = document.getElementById("clockDisplay");





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

   display.innerHTML = hours+":"+minutes+":"+seconds;
}

window.setInterval(myStopwatch, 10);

