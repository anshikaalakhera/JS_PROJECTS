const clock = document.getElementById("clock");

function UpdateClock(){

    const now = new Date();

    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hours = String(hours).padStart(2,"0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");

    clock.textContent=`${hours}:${min}:${sec}`;
}

UpdateClock();
