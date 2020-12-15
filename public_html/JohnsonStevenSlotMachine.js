function randomSymbol(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function PullTheLever() {
    var bet = document.forms["SlotMachine"]["playerBet"].value;
    if (isNaN(bet)) {
        alert("Enter a numeric bet!");
    }
    else {

        var slotOptions = ['bar.jpg',
            'bell.jpg',
            'cherries.jpg',
            'melon.jpg',
            'orange.jpg',
            'plum.jpg'
        ];


        var pulls = [];

        var thisSpin;

        for (var i = 0; i < 3; i++) {

            pulls[i] = randomSymbol(0, slotOptions.length - 1);

            if (i < 1) {
                thisSpin = "<img src=" + slotOptions[pulls[i]] + " />";
            } else {
                thisSpin = thisSpin + "<img src=" + slotOptions[pulls[i]] + " />";
            }
        }

        document.getElementById("line").innerHTML = thisSpin;

        var matches = pulls.filter((pull, index) => {
            return pulls.indexOf(pull) !== index;
        });

        var win = 0;
        var match = 1;

        if (matches.length > 0) {
            if (matches.length === 1) {
                win = bet * 2;
            } else {
                win = bet * 3;
            }
            document.getElementById("winnings").innerHTML = "<p> You won! </p> <p> Total Winngs: $" + win + "";
        } else {
            document.getElementById("winnings").innerHTML = "<p> You lost! </p>";
        }

    }
    return false;
}