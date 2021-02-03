const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

const workMinutes = document.getElementById("workMinutes");
const workSeconds = document.getElementById("workSeconds");

const restMinutes = document.getElementById("restMinutes");
const restSeconds = document.getElementById("restSeconds");

const cycleCounter = document.getElementById("cycleCounter");

var startTimer;

start.addEventListener('click', () => {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  }
})

pause.addEventListener('click', () => {
  stopInterval();
  startTimer = undefined;
})

reset.addEventListener('click', () => {
  workSeconds.innerHTML = "00";
  restSeconds.innerHTML = "00";

  stopInterval();

  workMinutes.innerHTML = work.value;
  restMinutes.innerHTML = rest.value;
  cycleCounter.innerHTML = cycles.value;
  
  if (workMinutes.value === undefined) {
    workMinutes.innerHTML = 25;
    restMinutes.innerHTML = 5;
    cycleCounter.innerHTML = 2;
  }
  
  startTimer = undefined;
})

function stopInterval() {
  clearInterval(startTimer);
}

function Params() {
  let work = document.getElementById('work').value;
  let rest = document.getElementById('rest').value;
  let cycles = document.getElementById('cycles').value;

  workMinutes.innerHTML = work;
  workSeconds.innerHTML = "00";
  restMinutes.innerHTML = rest;
  restSeconds.innerHTML = "00";
  cycleCounter.innerHTML = cycles;
}

function timer() {
  if (workSeconds.innerText != 0) {
    workSeconds.innerHTML--;
  } else if (workMinutes.innerHTML != 0 && workSeconds.innerHTML == 0) {
    workSeconds.innerHTML = 59;
    workMinutes.innerHTML--;
  }

  if (workMinutes.innerHTML == 0 && workSeconds.innerHTML == 0) {
    if (restSeconds.innerHTML != 0) {
      restSeconds.innerHTML--;
    } else if (restMinutes.innerHTML != 0 && restSeconds.innerHTML == 0) {
      restSeconds.innerHTML = 59;
      restMinutes.innerHTML--;
    }
  }

  if (restMinutes.innerHTML == 0 && restSeconds.innerHTML == 0) {
    workMinutes.innerHTML = work.value;
    workSeconds.innerHTML = "00"
    restMinutes.innerHTML = rest.value;
    restSeconds.innerHTML = "00";

    cycleCounter.innerHTML--;
    if(cycleCounter.innerHTML == 0) {
      stopInterval();
    }
  }
}

function closeDefinitions() {
  document.getElementById("timer-set").style.width = "0%";
  document.getElementById("text-alert").style.display = "none";
}

function addParams() {
  document.getElementById("timer-set").style.width = "100%";
  document.getElementById("text-alert").style.display = "block";
}