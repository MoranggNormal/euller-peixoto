const img = document.querySelector(".main-pic");

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(() => {
  img.style.borderRadius = `${randomIntFromInterval(
    30,
    80
  )}% ${randomIntFromInterval(20, 100)}% ${randomIntFromInterval(
    30,
    80
  )}% ${randomIntFromInterval(20, 100)}% / ${randomIntFromInterval(
    30,
    80
  )}% ${randomIntFromInterval(20, 100)}% ${randomIntFromInterval(
    30,
    80
  )}% ${randomIntFromInterval(20, 100)}%`;
}, 2100);
