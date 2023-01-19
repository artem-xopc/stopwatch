// Получаем основные элементы из HTML документа
const milsecElement = document.querySelector(".milSec");
const secElement = document.querySelector(".sec");
const minElement = document.querySelector(".min");
const hourElement = document.querySelector(".hour");

const roundElement = document.querySelector(".round__input") 

// Задаём кнопки
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");
const roundButton = document.querySelector(".new");

// Объявляем основные переменные
let milsec = 0,
  sec = 0,
  min = 0,
  hour = 0,
  interval,
  count = 0,
  disabled = true;

// задаём слушатели
startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startStopwatch, 10);
});

pauseButton.addEventListener("click", () => {
  clearInterval(interval);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  funcstopButton();
});

roundButton.addEventListener("click", () => {
  clearInterval(interval);
  funcRoundButton();
});


// функционал кнопок
const funcstopButton = () => {
  milsec = 0;
  sec = 0;
  min = 0;
  hour = 0;
  milsecElement.textContent = "00";
  secElement.textContent = "00";
  minElement.textContent = "00";
  hourElement.textContent = "00";
  disableBtn()
};

const funcRoundButton = () => {
    count++
    const resultRound = document.createElement("div")
    resultRound.innerText = `Round ${count}: ${hour > 9 ? hour : "0" + hour}:${min > 9 ? min : "0" + min}:${sec > 9 ? sec : "0" + sec}:${milsec > 9 ? milsec : "0" + milsec}`
    roundElement.append(resultRound)
    interval = setInterval(startStopwatch, 10);
};

const disableBtn = () => {
    if (disabled) {
        roundButton.disabled = true
    }
}
disableBtn()


// функционал секундомера
const startStopwatch = () => {
  milsec++;

  // подсчёт миллисекунд => секунд
  if (milsec < 9) {
    milsecElement.innerText = "0" + milsec;
  } else {
    milsecElement.innerText = milsec;
  }
  if (milsec > 99) {
    sec++;
    secElement.innerText = "0" + sec;
    milsec = 0;
    milsecElement.innerText = "0" + milsec;
  }

  // подсчёт секунд => минут
  if (sec < 9) {
    secElement.innerText = "0" + sec;
  } else {
    secElement.innerText = sec;
  }
  if (sec > 59) {
    min++;
    minElement.innerText = "0" + min;
    sec = 0;
    secElement.innerText = "0" + sec;
  }

  // подсчёт минуты => часы
  if (min < 9) {
    minElement.innerText = "0" + min;
  } else {
    minElement.innerText = min;
  }
  if (min > 59) {
    hour++;
    hourElement.innerText = "0" + hour;
    min = 0;
    minElement.innerText = "0" + min;
  }

  roundButton.disabled = false
};
