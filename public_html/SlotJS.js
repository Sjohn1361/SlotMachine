function randomSymbol(min,max) {
//Complete this function to return a random number
//Use the random number as the index to your array
//to choose the symbol for each pull
}

function PullTheLever() {
    var bet = document.forms["SlotMachine"]["playerBet"].value;
    if (isNaN(bet)) {
        alert("Enter a numeric bet!");
    }
    else {
//Create an array to hold the 6 symbols

//For each "pull", call the random number function
//Use the number returned as the index to your symbol array
//to retrieve a symbol for each pull
        var pull1, pull2, pull3;

//Build a string to display the "line" of symbols pulled
//See the hint in index.html for writing text to the web page (i.e. the HTML document)
//Remember you can use html tags in your string, like <h2></h2>
        var thisSpin;
        
//Use if statements to figure out how many symbols were matched
//and determine the winnings (if any)
        var win = 0;
        var match = 1;

//Build a string to display the "winnings" 
//See the hint in index.html for writing text to the web page (i.e. the HTML document)
        var result;
    }
    return false;
}

