/*let dateObj = new Date();
let day = dateObj.getUTCDate();
let month = dateObj.getUTCMonth() + 1;
let year = dateObj.getUTCFullYear();
let date = day + "" + month + "" + year
var currentDataInt = parseInt(date);
var currentDate = currentDataInt;

var entD = 30;
var entM = 6
var enY = 2022
var entDate = entD + "" + entM + "" + enY;
var expirationDateInt = parseInt(entDate);
var expirationDate = expirationDateInt;

let enteredCode = 1231;
let correctCode = 1234;
*/
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode === correctCode) {
        if (currentDate < expirationDate) {
            return " Cupon no valído, las fechas no coinciden"
        } else if (currentDate > expirationDate) {
            return " Cupon válído"
        } else {
            return " Cupon válído"
        }
    } else {
        return "Cupón no es válido, el cógido es incorrecto"
    }
};
