const card = document.querySelectorAll(".card-modal-open");

const modal1 = document.querySelector(".open-modal-1");
const modal2 = document.querySelector(".open-modal-2");
const modal3 = document.querySelector(".open-modal-3");


for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => {
    switch (card[i]) {
      case card[0]:
        modal1.style.top = '50%';
        break;

      case card[1]:
        modal2.style.top = '50%';
        break;

      case card[2]:
        modal3.style.top = '50%';
        break;
        
      default:
        break;
    }
  });
}
