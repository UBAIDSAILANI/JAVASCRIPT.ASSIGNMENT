// var count = 0;

// function timer(){
//     count++
//     console.log(count);
// }
// var interval = setInterval(timer, 1000);
// setTimeout(function(){
//     clearInterval(interval)

// }, 4000)

var min = 00;
var sec = 00;
var msec = 00;
var minheading = document.getElementById('min');
var secheading = document.getElementById('sec');
var msecheading = document.getElementById('msec');
var interval;
function timer (){
    msec++
    msecheading.innerHTML = msec
    if(msec >= 99){
        sec++
        secheading.innerHTML = sec
        msec = 00
        
    }else if (sec >= 59){
        min++
        minheading.innerHTML = min;
        sec = 00
    }

}
function start(){
   
    interval = setInterval(timer ,10);
    var start = document.getElementById('start');
    
        // start.style.display = 'none'
        start.disabled =true
    }
function pause(){
    clearInterval(interval);
    var start = document.getElementById('start');
    start.disabled = false
    

}
function reset(){
    min = 00;
    sec = 00;
    msec = 00;
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    msecheading.innerHTML = msec;
    clearInterval(interval);
    var start = document.getElementById('start');

    start.disabled = false

}
