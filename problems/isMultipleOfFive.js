/**
* Determines whether or not a number is a multiple of five.
* @param {number} n - The input number.
* @returns {boolean} - True if n is a multiple of five, false if n is not a multiple of five, or not a number.
*
* ex: isMultipleOfFive(20)
* returns: true (because 5 * 4 = 20)
*
* ex: isMultipleOfFive(77)
* returns: false (becuase 77 cannot be divided evenly by 5)
*
* ex: isMultipleOfFive("ten")
* returns: false (because the string "ten" is not a number)
*/

function isMultipleOfFive(n) {
    //conditional statment if given number divided by 5 equals 0
    if(n % 5 === 0){
        //return true a boolean
        return true;
    } else {
        //else return false a boolean
        return false;
    }
}

module.exports = isMultipleOfFive
