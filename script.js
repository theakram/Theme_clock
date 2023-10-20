const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
 
})

function setTime() {
    const time = new Date();
    const day = time.getDay();
    const month = time.getMonth();
    const date = time.getDate();
    const hours = time.getHours();
    console.log("time",time,month,day,date,hours);
    const hoursForClock = hours >=13 ? hours -12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const amPm = hours>12 ? 'PM' :'AM';
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock,0,12,0,360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutesForClock,0,60,0,360)}deg`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(secondsForClock,0,60,0,360)}deg`;
}


const scale = (num, in_min, in_max, out_min, out_max) =>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();

setInterval(setTime, 1000);
