// function fizzBuzz(number){
//     if(number % 3 === 0 && number % 5 === 0){
//         return "FizzBuzz";
//     }
//     if(number % 3 === 0){
//         return "Fizz";
//     }
//     if(number % 5 === 0){
//         return "Buzz";
//     }
// }

//In for Loop
playGame = []
function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
            if(i % 3 === 0 && i % 5 === 0){
                playGame.push("FizzBuzz");
            }
            else if(i % 3 === 0){
                playGame.push("Fizz");
            }
            else if(i % 5 === 0){
                playGame.push("Buzz");
            }
            else{
                playGame.push(i);
            }
        }
    console.log(playGame);
}
console.log(fizzBuzz());

//In while Loop
playGame = []
function fizzBuzz(){
    let i = 1;
    while(i <= 100){
        if(i % 3 === 0 && i % 5 === 0){
            playGame.push("FizzBuzz");
        }
        else if(i % 3 === 0){
            playGame.push("Fizz");
        }
        else if(i % 5 === 0){
            playGame.push("Buzz");
        }
        else{
            playGame.push(i);
        }
    }
    console.log(playGame);
}
console.log(fizzBuzz());



