const flipBtn = document.getElementById("flip-btn")
const card = document.getElementById("card")

flipBtn.addEventListener("click", flipCard);

function flipCard() {
  card.classList.toggle("flipped");
}