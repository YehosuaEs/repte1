
function isStrongNumber(num) {
    let resSuma = 0;
    let digits = num.toString().split('').map(iNum => parseInt(iNum));
    for (i = 0; i < digits.length; i++) {
        resSuma += factorial(digits[i])
    }
    return resSuma === num ? "STRONG" : "Not Strong !!";
};

function factorial(n) {
    return n == 0 ? 1 : n * factorial(n - 1);
}