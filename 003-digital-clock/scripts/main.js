const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const amPm = document.querySelector(".am-pm");

// Update time
const updateTime = () => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    // Check if hours .... less than 10 and add 0
    if (hours < 10) {
        hoursEl.innerHTML = "0" + hours;
    } else if(minutes < 10) {
        minutesEl.innerHTML = "0" + minutes;
    } else if(seconds < 10) {
        secondsEl.innerHTML = "0" + seconds;
    } else if(hours >= 12) {
        amPm.innerHTML = "PM";
    }
};

setInterval(updateTime, 1000);