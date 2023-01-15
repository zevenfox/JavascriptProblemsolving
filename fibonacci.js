let number = window.prompt("What is number you want to know?");
// i:1 = 0 , i:2 = 1
// [i1,i2]
lst = [0,1]

function fibonacci(number){
    if (number > 0){
        for(i = 2; i < number ; i++){
            lst.push(lst[i-1] + lst[i-2])
        }
        console.log(lst)
    }
    else{
        alert("Input must be positive")
    }
}
fibonacci(number)


//or 
function fibonacci(num) {
    if (num <= 0) {
        return 0;
    } else if (num <= 2) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
console.log(fibonacci(7));