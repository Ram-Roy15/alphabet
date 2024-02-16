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

function removeBackgroundColor(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("bg-orange-400");
}
function getRandomAlphabets() {
  const alphabetSring = "abcdefghijlkmnopqrstuvwxyz";
  const alphabets = alphabetSring.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function getTextElementId(elementID) {
  const element = document.getElementById(elementID);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;
}

function setValueId(elementID, value) {
  const element = document.getElementById(elementID);
  element.innerText = value;
}
