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
for(let i = 0; i < n.length; i++)
    if(n[i] === 3){
        numOf[n] += 1
    } else {
        numOf[n] = 1
    }
    return numOf;
}


module.exports = countThrees
