const mainCursor = document.querySelector(".cursor-main");
const followCursor = document.querySelector(".cursor-follow");


document.addEventListener("mousemove", (e) => {
  let x = e.screenX;
  let y = e.screenY - 80;

  console.log(e);

  followCursor.style.top = y + "px";
  followCursor.style.left = x + "px";

  mainCursor.style.top = y + "px";
  mainCursor.style.left = x + "px";

  if (e.target.className.includes('hoverable')) {
      mainCursor.style.width = '3.9em'
      mainCursor.style.height = '3.9em'
      console.log('hey');
  }else{
      mainCursor.style.width = '2.9em'
      mainCursor.style.height = '2.9em'
  }

});
