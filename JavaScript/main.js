// Получаем основные элементы из HTML документа
const milsecElement = document.querySelector(".milSec");
const secElement = document.querySelector(".sec");
const minElement = document.querySelector(".min");
const hourElement = document.querySelector(".hour");

// Задаём кнопки
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");

// Объявляем основные переменные
let milsec = 0,
  sec = 0,
  min = 0,
  hour = 0,
  interval;

// задаём слушатели
startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startStopwatch, 10);
});

pauseButton.addEventListener("click", () => {
    clearInterval(interval)
});

stopButton.addEventListener("click", () => {
    clearInterval(interval);
    milsec = 0
    sec = 0
    min = 0
    hour = 0
    milsecElement.textContent = "00"
    secElement.textContent = "00"
    minElement.textContent = "00"
    hourElement.textContent = "00"
});

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
    secElement.innerText = "0" + sec
  } else {
    secElement.innerText = sec
  }
  if (sec > 59) {
    min++
    minElement.innerText = "0" + min
    sec = 0
    secElement.innerText = "0" + sec
  }

  // подсчёт минуты => часы
  if (min < 9) {
    minElement.innerText = "0" + min
  } else {
    minElement.innerText = min
  }
  if (min > 59) {
    hour++
    hourElement.innerText = "0" + hour
    min = 0
    minElement.innerText = "0" + min
  }
};
