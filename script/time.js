const time_label = document.querySelector('.left-clock-text')
setTime();
function setTime(){
    const current_time = new Date();
    const options = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true};
    const est_time = current_time.toLocaleString('en-US', options);
    time_label.textContent = est_time;
};

setInterval(setTime, 1000);
