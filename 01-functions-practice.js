//STEP 1
function halfNumber(num) {
    "use strict";
    return num / 2;
}
//test
var num1 = 6;
window.console.log("Half of " + num1 + " is " + halfNumber(num1));

//STEP 2
function squareNumber(num) {
    "use strict";
    return (Math.pow(num, 2));
}
//test
var num2 = 10;
window.console.log("The result of squaring the number " + num2 + " is " + squareNumber(num2));

//STEP 3
function percentOf(x, y) {
    "use strict";
    return (x / y * 100);
}
//test
window.console.log(num1 + " is " + percentOf(num1, num2) + " of " + num2);

//STEP 4
function findModulus(x, y) {
    "use strict";
    return (x % y);
}
//test
window.console.log(findModulus(num1, num2) + " is the modulus of " + num1 + " and " + num2);