/**
* Counts the number of threes in a given number.
* @param {number} n - The input number.
* @returns {number} - Returns how many threes are in the input.
*
* ex: countThrees(300)
* returns: 1
*
* ex: countThrees(3203)
* returns: 2
*
* ex: countThrees(47)
* returns: 0
*/

function countThrees(n) {
let numOf = 0;
//a number with no known length must use while loop! (NOT .length)
while(n>0){
    //rem gets each number from within the numbers integer ( 3327 )
    rem=n%10
    // conditional if the number fetched is 3  add (++) to variable numOf
    if(rem ==3){
        numOf++;
    }
    //input number is now updated with conditional and returns the coditional number (3)
    //Math.floor is without the remainder value  ( ONLY the 3's)
    n=Math.floor(n/10)
}
//return the updated integer with just the 3 fetched
    return numOf;
}


module.exports = countThrees
