const mainCursor = document.querySelector(".cursor-main");
const followCursor = document.querySelector(".cursor-follow");


document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  followCursor.style.top = y + "px";
  followCursor.style.left = x + "px";

  mainCursor.style.top = y + "px";
  mainCursor.style.left = x + "px";

  if (e.target.className.includes('hoverable')) {
      mainCursor.style.width = '3.9em'
      mainCursor.style.height = '3.9em'
  }else{
      mainCursor.style.width = '2.9em'
      mainCursor.style.height = '2.9em'
  }

});
