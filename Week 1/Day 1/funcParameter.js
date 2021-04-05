function operation(num1, num2, ...num){
    if (arguments.length < 2)
        return 0;
    else if (arguments.length == 2)
        return isNaN(num1 + num2) ? 0 : num1 + num2;
    else {
        var sum = 0;
        num.forEach(element => {
            sum = sum + element;
        });
        sum = (num1 + num2) - sum;
        return isNaN(Math.abs(sum)) ? 0 : Math.abs(sum);
    }
}
console.log(operation(2, 3, 1, 5, 6));