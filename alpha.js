// function playNow() {
//   const homeSection = document.getElementById("home-section");
//   homeSection.classList.add("hidden");
//   //   console.log(homeSection.classList);
//   //   console.log("done");

//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
// }

function continueGame() {
  const alphabet = getRandomAlphabets();
  console.log("your number:", alphabet);
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColor(alphabet);
}

function playNow() {
  hideElementId("home-section");
  showElementId("play-ground");
  continueGame();
}
