document.querySelector("button").addEventListener("click", roll);

function roll() {
  var randomOne = Math.floor(Math.random() * 6) + 1;
  var randomTwo = Math.floor(Math.random() * 6) + 1;

  var PlayerOneDiceImg = "images/dice" + randomOne + ".png";
  var PlayerTwoDiceImg = "images/dice" + randomTwo + ".png";

  document.querySelector(".dice .img1").setAttribute("src", PlayerOneDiceImg);
  document.querySelector(".dice .img2").setAttribute("src", PlayerTwoDiceImg);

  if (randomOne > randomTwo) {
    document.querySelector("h1").innerHTML = "Gigla Won!";
  } else if (randomOne < randomTwo) {
    document.querySelector("h1").innerHTML = "Avala Won!";
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
  }
}
