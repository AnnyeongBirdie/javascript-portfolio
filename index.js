
//first player dice roll

var randomNumber1 = Math.floor(Math.random() * 6) +1; //random number between 1 and 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // string dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img") [0]; //find first player dice image

image1.setAttribute("src", randomImageSource); //replace first player dice image


//second player dice roll

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); 


//judge

if (randomNumber1 > randomNumber2) {
   document.querySelector("h1").innerHTML = "🏆 Player 1 wins!"
} 

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🏆 "
} 

else {
    document.querySelector("h1").innerHTML = "Draw!"
}

