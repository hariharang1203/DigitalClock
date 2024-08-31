const clock = document.querySelector(".clock");
        
function digitalClock() {
    const time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let text = "AM";

    if (hours > 12) {
        hours -= 12;
        text = "PM";
    }
     else if (hours === 0) {
        hours = 12;

    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.innerHTML = `${hours}:${minutes}:${seconds} ${text}`;
}

setInterval(digitalClock, 1000);