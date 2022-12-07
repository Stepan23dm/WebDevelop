var timeNode = document.getElementById('time-node');
 
function getCurrentTimeString2(dots) {
    var timeString = new Date().toTimeString().replace(/:[0-9]{2,2} .*/, '');
    return dots ? timeString : timeString.replace(/:/, ' ');
};
 
setInterval(
    () => { 
        timeNode.innerHTML = getCurrentTimeString2(Math.round(Date.now() / 1000) % 2);
    },
    1000
);


function getText(){
    alert("<<Click>>");
};

function Click(){
    setTimeout(getText, 5000); //Данное сообщение всплывёт через 5 сек.
}
