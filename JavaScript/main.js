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
let milsec = 00,
  sec = 00,
  min = 00,
  hour = 00,
  interval;

// задаём слушатели
startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startStopwatch, 10);
});

const startStopwatch = () => {
  milsec++;
  if (milsec < 9) {
    milsecElement.innerText = "0" + milsec;
  }
  if (milsec > 9) {
    milsecElement.innerText = milsec;
  }
  if (milsec > 99) {
    sec++;
    secElement.innerText = "0" + sec;
    milsec = 0;
    milsecElement.innerText = "0" + milsec;
  }
};
