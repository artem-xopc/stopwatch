const milsecElement = document.querySelector(".milSec");
const secElement = document.querySelector(".sec");
const minElement = document.querySelector(".min");
const hourElement = document.querySelector(".hour");
const inputElement = document.querySelector(".input");
const dateElement = document.querySelector(".timeNow");

const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");
const selectButton = document.querySelector(".select");

let milsec = 0,
  sec = 0,
  min = 0,
  hour = 3,
  interval,
  disabled = true;


// функция для вывода времени пользователя (не дописана)
const time = () => {
  dateElement.innerHTML = new Date().toLocaleTimeString()
  console.log(time)
}

// задаём слушатели
startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

pauseButton.addEventListener("click", () => {
  clearInterval(interval);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  funcstopButton();
});

selectButton.addEventListener("click", () => {
  clearInterval(interval)
  disableSelect();
})

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
  disableBtn();
};

// Функция для активации/деактивации поля ввода значения таймера
const disableSelect = () => {
  if (disabled) {
    roundButton.disabled = true;
  }
};
disableBtn();

// захардкоженная переменная таймера
let timeHard = 3600;
let hourSelect = 2;
let minSelect = 60;
let secondSelect = 0;


const activetimer = () => {
  if (active) {}

  let minutes = Math.floor(timeHard / 60);
  let hour = Math.floor(minutes / 60);
  if (minutes >= 60) {
    minutes = Math.floor(minutes / 60)
    hour++
  }
  let seconds = timeHard % 60;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  hourElement.innerHTML = hour;
  minElement.innerHTML = minutes;
  secElement.innerHTML = seconds;
  timeHard--;
}

setInterval(timer, 1000);





// const startTimer = () => {
//   if (hour !== 0) {
//     if(hour)
//     hour--
//     hourElement.innerText = '0' - hour
//   } else if (min !== 0 && hour !== 0) {
//     hour--
//     min--
//   }
// } 