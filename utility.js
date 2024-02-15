function hideElementId(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("hidden");
}

function showElementId(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("hidden");
}

function setBackgroundColor(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("bg-orange-400");
}

function getRandomAlphabets() {
  const alphabetSring = "abcdefghijlkmnopqrstuvwxyz";
  const alphabets = alphabetSring.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;
}
