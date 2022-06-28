var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomNumber2 = Math.floor((Math.random() * 6)+1);

var randomDiceImage1 = "dice" + randomNumber1 +".png";
var randomDiceImage2 = "dice" + randomNumber2 +".png";

var RandomImageSource1 = "images/" + randomDiceImage1;
var RandomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];


image1.setAttribute("src",RandomImageSource1);
image2.setAttribute("src",RandomImageSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}

else if( randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = " Player 2 wins! 🚩";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}