let homeEl = document.getElementById("home-score")

let home = 0

function incrementHome(num) {
    home = home + num
    homeEl.textContent = home
}
let away = 0
function incrementAway(num) {
    away = away + num
    awayEl.textContent = away
}
let leadTeam = document.getElementById("team-leading")
console.log(leadTeam)


function leadingTeam() {
    let homeScore = home
    let awayScore = away
    if(homeScore > awayScore){
        leadTeam.textContent = "Click to see the Leading Team: Home"
    }
    else if (awayScore > homeScore){
        leadTeam.textContent = "Click to see the Leading Team: Away";
    }
    else if (homeScore === awayScore){
        leadTeam.textContent = "Click to see the Leading Team: Draw"
    }
}

let awayEl = document.getElementById("away-score")
console.log(awayEl)
let num2 = 0



var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
var datetime = date +' '+ time
console.log(datetime)

let matchDate = document.getElementById("match-date")
matchDate.innerHTML += date

let matchTime = document.getElementById("time")
matchTime.innerHTML +=time

let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timeRef = document.querySelector(".match-time");
let int = null;

document.getElementById("start-timer").addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener('click',()=>{
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    timeRef.textContent = '00 : 00: 00: 000';
    console.log(timeRef)
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds==1000){
        milliseconds = 0;
        seconds++;
        if(seconds==60){
            seconds = 0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours: hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds <10 ? "00" + milliseconds: milliseconds < 100 ? "0"+ milliseconds: milliseconds;
    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
