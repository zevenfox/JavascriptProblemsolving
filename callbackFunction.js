// not call by us it call by the click
// as Javascript heading in wiki h1 = $0
$0.addEventListener("click",function(event){
    console.log(event)
});

// or 

function anotherAddEventListener(typeOfEvent, callback){
    var eventThatHappend = {
        eventType : keydown,
        key : "k",
        durationOfKeydown : 2
    }
}
// callback doesn't get call all of type of event
if (eventThatHappend.eventType === typeOfEvent){
    callback(eventThatHappend);
}

// try
anotherAddEventListener("keypress", function(event){
    console.log(event)
});