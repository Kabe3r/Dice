const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function() {
  genRandom();
});

function genRandom() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
  document.querySelectorAll("img")[0].setAttribute("src", `images/dice${randomNumber1}.png`);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelectorAll("img")[1].setAttribute("src", `images/dice${randomNumber2}.png`);

  // Winners Logic
  let result;
  if (randomNumber1 > randomNumber2) {
    result = "🏆 Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    result = "Player 2 Wins! 🏆";
  }
  else {
    result = "Draw!";
  }
  h1.innerHTML = result;
}

