

function checkTime(i){
    if(i<10){
        i = '0' + i;
    }

    return i;
}

function startTime(){

    var today = new Date();

    var hours = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    // add a zero in front of numbers<10

    min = checkTime(min);

    sec = checkTime(sec);

    document.getElementById('time').innerHTML = hours + ' : ' + min + ' : ' + sec;

    t = setTimeout(function(){
        startTime()
    },1000);
}

startTime();