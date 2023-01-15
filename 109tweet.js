/* Limit tweet */
var tweet = prompt("What do you want to tweet?");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " tweet and have " + (140-tweetCount) + " left");

var tweetUnder140 = tweet.slice(0, 140)
alert (tweetUnder140);

var tweettoLower =  tweetUnder140.toLowerCase();
alert (tweettoLower);


/* Change first character to uppercase */
var name = prompt("What is your name?");
name = name.charAt(0).toUpperCase() + name.slice(1);

// or
var name = prompt("What is your name?");
var firstLetter = name.slice(0,1)
var uppercaseFirstchar = firstLetter.toUpperCase();
var otherLetter = name.slice(1,name.length);
var capitaliseName = uppercaseFirstchar + otherLetter;
alert (capitaliseName);
