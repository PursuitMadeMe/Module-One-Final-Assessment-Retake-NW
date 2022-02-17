/** Sum all even numbers in an array
 * 
* @param {number[]} arr - The input array
* @returns {number} - The sum of all even numbers
*
* ex: sumEvenNumbers([1, 2, 3, 4])
* returns: 6 (because 2 + 4 = 6)
*
* ex: sumEvenNumbers([4, 3, 10])
* returns: 14
*/
function sumEvenNumbers(arr) {
    // let evenNum variable equal to 0
    let evenNum = 0;
    // loop throught the arr arry 
    for(let i = 0; i < arr.length; i++)
    //conditional if iterating though arr array even
        if(arr[i] % 2 === 0){
            //let even number equal 0 plus the even numbers from the conditional statement 
            evenNum = evenNum + arr[i]
        }
        //return the new array with with all the added even numbers from the arr array
    return evenNum;
}

module.exports = sumEvenNumbers
