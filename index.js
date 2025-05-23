function createRandom() {
    return Math.floor(Math.random() * 6 + 1);
  }

  const random1 = createRandom();
const random2 = createRandom();

document.querySelector(".img1").setAttribute("src", `images/dice${random1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${random2}.png`);

const heading = document.querySelector("h1");
if (random1 > random2) {
  heading.textContent = "🚩 Player 1 Wins!";
} else if (random2 > random1) {
  heading.textContent = "Player 2 Wins! 🚩";
} else {
  heading.textContent = "Draw!";
}