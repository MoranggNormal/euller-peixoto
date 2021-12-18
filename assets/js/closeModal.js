const button1 = document.querySelector(".close-modal-1");
const button2 = document.querySelector(".close-modal-2");
const button3 = document.querySelector(".close-modal-3");
const button4 = document.querySelector(".close-modal-4");

button1.addEventListener("click", (e) => {
  e.target.parentNode.parentNode.style.top = '-200vw';
});

button2.addEventListener("click", (e) => {
  e.target.parentNode.parentNode.style.top = '-200vw';
});

button3.addEventListener("click", (e) => {
  e.target.parentNode.parentNode.style.top = '-200vw';
});

button4.addEventListener("click", (e) => {
  e.target.parentNode.parentNode.style.top = '-200vw';
});
