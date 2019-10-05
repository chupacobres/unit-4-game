

var targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

$("#number-to-guess").text(targetNumber);

var counter = 0;
var gamesWon = 0;
var gamesLost = 0;


var randomCrystalnum1 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var randomCrystalnum2 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var randomCrystalnum3 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var numberOptions = [randomCrystalnum1, randomCrystalnum2, randomCrystalnum3];


var imageCrystal1 = $("<img>");
var imageCrystal2 = $("<img>");
var imageCrystal3 = $("<img>");

imageCrystal1.addClass("crystal-image");
imageCrystal2.addClass("crystal-image");
imageCrystal3.addClass("crystal-image");

imageCrystal1.attr("src", "assets/images/black.png");
imageCrystal2.attr("src", "assets/images/brown.png");
imageCrystal3.attr("src", "assets/images/green.png");


imageCrystal1.attr("data-crystalvalue", numberOptions[0]);
imageCrystal2.attr("data-crystalvalue", numberOptions[1]);
imageCrystal3.attr("data-crystalvalue", numberOptions[2]);


$("#crystals").append(imageCrystal1, imageCrystal2, imageCrystal3);


function reset() {
  counter = 0;
  targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
  $("#number-to-guess").text(targetNumber);
  randomCrystalnum1 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
  randomCrystalnum2 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
  randomCrystalnum3 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
  numberOptions = [randomCrystalnum1, randomCrystalnum2, randomCrystalnum3];
  imageCrystal1.attr("data-crystalvalue", numberOptions[0]);
  imageCrystal2.attr("data-crystalvalue", numberOptions[1]);
  imageCrystal3.attr("data-crystalvalue", numberOptions[2]);
}



$(".crystal-image").on("click", function () {

  
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;

  alert("New score: " + counter);

  if (counter === targetNumber) {
    var win = "You win";
    $("#winorlose").text(win);
    gamesWon === gamesWon++;
    $("#Wins").text(gamesWon);
    reset();
  }

  else if (counter >= targetNumber) {
    var lose = "You lose";
    $("#winorlose").text(lose);
    gamesLost === gamesLost++;
    $("#Loses").text(gamesLost);
    reset();
  }

});

