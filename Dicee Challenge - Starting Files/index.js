var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber1 *= 6;
randomNumber2 *= 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
randomNumber2 = Math.floor(randomNumber2) + 1;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "<em><strong>Player 1 wins</strong></em>";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "<em><strong>Player 2 wins</strong></em>";
}
else{
  document.querySelector("h1").innerHTML = "<strong>It's a draw</strong>";
}

document.querySelector("img.img1").setAttribute("src", "images/dice"+ randomNumber1 +".png");
document.querySelector("img.img2").setAttribute("src", "images/dice"+ randomNumber2 +".png");

console.log(randomNumber1);
