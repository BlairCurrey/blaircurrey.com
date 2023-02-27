const CARD = document.getElementById("card")
const FLIP_BUTTON = renderFlipBtn();

FLIP_BUTTON.addEventListener("click", () => CARD.classList.toggle("flipped"));

function renderFlipBtn(){
  const i = document.createElement('i');
  i.id = "flip-btn";
  i.classList.add('fa-solid', 'fa-repeat');
  CARD.insertBefore(i, CARD.firstChild);
  return i
}
