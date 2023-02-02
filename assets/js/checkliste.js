(function (window, document) {
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");
const ergebnisBtn = document.getElementById("ergebnis-btn");
const checklisteResult = document.querySelector(".checkliste-result");
function getNumber() {
  let counter = 0;
  const checkboxes = document.querySelectorAll(".checkliste-wrapper input");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      counter++;
    } 
  });
  if (counter < 4) {
    result1.classList.add("visible");
  } else {
    result1.classList.remove("visible");
  }
  if (counter >= 4 && counter < 7) {
    result2.classList.add("visible");
  } else {
    result2.classList.remove("visible");
  }
  if (counter >= 7) {
    result3.classList.add("visible");
  } else {
    result3.classList.remove("visible");
  }
}
function showResultDiv() {
checklisteResult.style.display='block';
} })(window, document);
