const modules = [24, 26, 27, 28, 29, 30];
const times = modules
  .map((module) => module - 1)
  .map((module) =>
    document.querySelector(
      `div[data-purpose="section-panel-${module}"] span[data-purpose="section-duration-sr-only"] span:nth-child(2)`
    )
  )
  .map((span) => span.innerText);
let hoursToMinutes =
  times
    .filter((time) => time.includes("godz"))
    .map((time) => parseInt(time.substring(0, time.indexOf("godz")).trim()))
    .reduce((accumulator, current) => accumulator + current, 0) * 60;
let minutes = times
  .map((time) => time.substring(time.indexOf("min") - 3, time.indexOf("min")))
  .map((minutes) => minutes.trim())
  .map((minutes) => parseInt(minutes))
  .reduce((accumulator, current) => accumulator + current, 0);
const sum = hoursToMinutes + minutes;
console.log(sum / 60);
