let clockInterval;

function updateClock() {

  clearInterval(clockInterval);

  const timezoneOffset = parseFloat(document.getElementById("timezone").value);

  function showTime() {

    let now = new Date();
    let utc = now.getTime() + now.getTimezoneOffset() * 60000;
    let localTime = new Date(utc + 3600000 * timezoneOffset);

    document.getElementById("clock").innerText = localTime.toLocaleTimeString();
    document.getElementById("date").innerText = localTime
      .toISOString()
      .split("T")[0];
  }

  showTime();
  clockInterval = setInterval(showTime, 1000);

}

updateClock();
