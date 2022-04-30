const barOuter = document.querySelector(".bar-outer");
const options = document.querySelectorAll(".bar-grey .option");
let current = 1;
options.forEach((option, i) => (option.index = i + 1));
options.forEach(option =>
  option.addEventListener("click", function () {
    barOuter.className = "bar-outer";
    barOuter.classList.add(`pos${option.index}`);
    if (option.index > current) {
      barOuter.classList.add("right");
    } else if (option.index < current) {
      barOuter.classList.add("left");
    }
    current = option.index;
  }));
const startBtn = document.querySelector(".bar .start");
const stopBtn = document.querySelector(".bar .stop");
const resetBtn = document.querySelector(".bar .reset");
let hour = 0, min = 0, sec = 0, clock = false;
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
// render value on screen 
function render(min, sec, hour) {
  sec >= 10 ? document.querySelector(".sec").innerHTML = +sec : document.querySelector(".sec").innerHTML = "0" + sec;
  min >= 10 ? document.querySelector(".min").innerHTML = +min : document.querySelector(".min").innerHTML = "0" + min;
  hour >= 10 ? document.querySelector(".hour").innerHTML = +hour : document.querySelector(".hour").innerHTML = "0" + hour;

}
function start() {

  if (clock === false) {
    clock = true;
    stopWatch();
  }
}
function stop() {
  if (clock === true) {
    clock = false
  }


} function reset() {
  min = 00;
  sec = 00;
  hour = 00;
  render(min, sec, hour);
  clock = false;
}
function stopWatch() {
  if (clock === true) {
    sec++;
    render(min, sec, hour);
    if (sec >= 60) {
      sec = 0;
      min++;
      render(min, sec, hour);
    }
    if (min >= 60) {
      min = 0;
      hour++;
      render(min, sec, hour);
    }

    setTimeout(() => {
      stopWatch()
    }, 1);
  }
}