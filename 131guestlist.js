var guestList = ["Micky", "Emmy", "Forth", "Great", "Ploy"];
var nameList = prompt("what is you name?: ");

function cangoIn(guestList){
    if (guestList.includes(nameList)){
        alert(nameList + " can go to party");
    }
    else{
        alert(nameList + " can not go to party");
}
}

// can choose who can go 
//this will allow just micky can go
cangoIn("Micky");

