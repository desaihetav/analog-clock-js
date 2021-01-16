const degree = 6;
const hourEl = document.querySelector(".h");
const minuteEl = document.querySelector(".m");
const secondEl = document.querySelector(".s");

setInterval(() => {
  let date = new Date();
  let hrDegree = date.getHours() * 30;
  let minDegree = date.getMinutes() * degree;
  let secDegree = date.getSeconds() * degree;

  hourEl.style.transform = `rotateZ(${hrDegree + minDegree / 12}deg)`;
  minuteEl.style.transform = `rotateZ(${minDegree}deg)`;
  secondEl.style.transform = `rotateZ(${secDegree}deg)`;
});
