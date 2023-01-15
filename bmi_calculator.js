//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    if (bmi<18.5){
        return "You are Underweight: " + bmi;
    } 
    else if (bmi>=18.5 && bmi<24.9){
        return "You are Normal: " + bmi;
    } 
    else if (bmi>=25 && bmi<29.9){
        return "You are Overweight: " + bmi;
    }
    else if (bmi>=30 && bmi<34.9){
        return "You are Obese: " + bmi;
    }
    else{
        return "You are OBESE: " + bmi;
    }
}


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:



bmi should equal 20 when it's rounded to the nearest whole number.

*/

var bmi = bmiCalculator(65, 1.1); 
console.log(bmi);

