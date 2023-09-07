var namePaying = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
function getRandomName() {
    return namePaying[Math.floor(Math.random() * namePaying.length)]
}
//or
function getRandomName2() {
    var name = Math.floor(Math.random(namePaying.length))
    return namePaying[name]
}

//or
function whosPaying(names) {
    
    /******Don't change the code above*******/
        //Write your code here.
        var rand = Math.random();
        rand = Math.floor(rand * names.length);
        return names[rand] + " is going to buy lunch today!";
    /******Don't change the code below*******/    
    }