
// Roll Dice Function
function RollDice() {
    // declaring variables
    var roll = document.getElementsByClassName("roll");
    var dice = document.getElementsByClassName("dice");

    // Randomizing roll number
    for (var i=0; i<roll.length; i++) {
        roll[i].value = Math.floor(Math.random()*6) + 1;
    }

    // Assigning the image to the number that is rolled
    for (var i=0; i<dice.length; i++) { // for loop
        dice[i].src = "dice_" + roll[i].value + ".png";
        dice[i].alt = roll[i].value + " Dice Face";
    }

}