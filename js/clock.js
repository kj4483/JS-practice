const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const secondes = String(date.getSeconds()).padStart(2, "0");

    time = `${hours}:${minutes}:${secondes}`
    // time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds() > 9 ? date.getSeconds() : "0"+date.getSeconds()}`;
    clock.innerText = time;
}

getClock()
setInterval(getClock, 1000);
