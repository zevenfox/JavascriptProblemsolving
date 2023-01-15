numberOfBottles = prompt('How many bottles of beer do you want to have? ');

function wordforBottles(bottles) {
    if (bottles === 1) {
        return 'bottle';
    } else {
        return 'bottles';
    }
}

function songGenerate(numberOfBottles) {
    for(i = numberOfBottles; i >= 0 ; i--){
        if (i > 0 && i  !== 1) {
            console.log(i + " " + wordforBottles(i) + " of beer on the wall, take one down and pass it around, " + (i-1) + " " + wordforBottles(i-1) + " of beer on the wall.");
        }
        else if (i === 1){
            console.log(i + " " + wordforBottles(i) + " of beer on the wall, take one down and pass it around, No more bottles of beer on the wall.");
        }
        else {
            console.log("No more bottles of beer on the wall, Go to store and buy some more, " + numberOfBottles + " " + wordforBottles(numberOfBottles) + " of beer on the wall.");
        }
    }
}
songGenerate(numberOfBottles);


//or Simplify by ChatGPT
let numberOfBottles = prompt("How many bottles of beer do you want to have? ");

for (let i = numberOfBottles; i >= 0; i--) {
    let bottles = i === 1 ? "bottle" : "bottles";
    if (i > 0) {
    console.log(i + " " + bottles + " of beer on the wall, take one down and pass it around, " + (i - 1) + " " + bottles + " of beer on the wall.");
    } else {
    console.log("No more bottles of beer on the wall, go to store and buy some more, " + numberOfBottles + " " + bottles + " of beer on the wall.");
    }
}