const diceImages = [
    "assets/dice1.png",
    "assets/dice2.png",
    "assets/dice3.png",
    "assets/dice4.png",
    "assets/dice5.png",
    "assets/dice6.png",
  ];
  
  const rollButton = document.getElementById("rollButton");
  const diceImage = document.getElementById("diceImage");
  const roundCounter = document.getElementById("roundCounter");
  
  let rounds = 0;
  
  rollButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * diceImages.length);
  
    diceImage.src = diceImages[randomIndex];
  
    diceImage.style.transform = "rotate(360deg)";
    setTimeout(() => {
      diceImage.style.transform = "rotate(0deg)";
    }, 500);
  
    rounds++;
    roundCounter.textContent = `Rounds: ${rounds}`;
  });