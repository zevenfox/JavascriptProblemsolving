prompt("whats is your name?");
prompt("what is their name?");

var n = Math.random() * 100 + 1;
loveScore =Math.floor(n) + 1;
if (loveScore >= 70) {
    alert("Your love score is Good " + loveScore + "%");
}
else if (loveScore >= 30 && loveScore < 70) {
    alert("Your love score is Mid " +  loveScore + "%");
}
else {
    alert("Your hate score is" + loveScore + "%");
}

alert("Your love score is" + loveScore + "%")

//for short
// var loveScore = Math.floor(Math.random() * 100 + 1);
// alert("Your love score is" + loveScore + "%")