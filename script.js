function updateUTCTime() {
    const utcTimeElement = document.getElementById("utcTime");

    function updateTime() {
        const now = new Date();
        utcTimeElement.textContent = now.toUTCString();
    }

    updateTime();
    setInterval(updateTime, 1000);
}

updateUTCTime();
