var getPlay = confirm("Do you want to play a game?");

while (getPlay) {
   var winNum = Math.floor(Math.random() * spec);
   var spec = 6, games = 0, nextRound = true, totalPrize = 0, maxPrize = 10, curPrize = 10, attempts = 0, leftAt = 3;


    while (attempts < 3 && nextRound) {
        var userNumber = prompt("Enter a number from 0 to " + (spec - 1) + "\nAttempts left: " + leftAt + "\nTotal prize: " + totalPrize + "$" + "\nPossible prize on current attempt: " + curPrize + "$");

        if (!isNaN(parseFloat(userNumber)) && isFinite(userNumber) && Number(userNumber) === winNum) {
            totalPrize += curPrize; attempts = 0; leftAt = 3;
            spec = spec * 2 - 1;
            maxPrize *= 3; curPrize = maxPrize;
            winNum = Math.floor(Math.random() * spec);
            nextRound = confirm('Do you want to continue a game?');
        } else {
           attempts++; leftAt--;
           curPrize = Math.floor(maxPrize / (attempts * 2));
        }
    }

    console.log("Thank you for a game. Your prize is " + totalPrize + "$");
    getPlay = confirm("Do you want to try again?");
    games++;
}

if (!games) {
    console.log("You did not become a millionaire");
}
