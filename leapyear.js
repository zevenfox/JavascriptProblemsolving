function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return year + " is leap year";
    }
    else {
            return year + " is not leap year";
        }
}

console.log(leapYear(2100));
