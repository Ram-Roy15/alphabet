document.addEventListener("keyup", function (e) {
  const pressedButton = e.key;
  const randomAlphabet = document
    .getElementById("current-alphabet")
    .innerText.toLowerCase();
  if (pressedButton === "Escape") {
    gameOver();
  }

  if (randomAlphabet === pressedButton) {
    continueGame();
    removeBackgroundColor(randomAlphabet);

    const currentScore = getTextElementId("current-score");
    const newScore = currentScore + 1;
    setValueId("current-score", newScore);
  } else {
    const currentLife = getTextElementId("current-life");
    const newLife = currentLife - 1;
    setValueId("current-life", newLife);
    if (newLife === 0) {
      gameOver();
    }
  }
});

function continueGame() {
  const alphabet = getRandomAlphabets();
  // console.log("your number:", alphabet);
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColor(alphabet);
}

function playNow() {
  hideElementId("home-section");
  hideElementId("play-again");
  showElementId("play-ground");

  setValueId("current-life", 5);
  setValueId("current-score", 0);
  const removeBg = getElementTextById("current-alphabet");
  removeBackgroundColor(removeBg);
  continueGame();
}

function gameOver() {
  hideElementId("play-ground");
  showElementId("play-again");
  const lastScore = getTextElementId("current-score");
  setValueId("last-score", lastScore);
}
