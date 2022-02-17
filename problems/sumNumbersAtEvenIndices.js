/** Sum all numbers at even indices in an array
* 
* @param {number[]} arr - The input array of numbers, with length >= 1
* @returns {number} - The sum of all numbers at even indices
*
* ex: sumNumbersAtEvenIndices([10, 5, 10, 5])
* returns: 20
* explanation: the even indices are arr[0] and arr[2]
* arr[0] is 10 and arr[2] is 10, and 10 + 10 = 20
*
* ex: sumNumbersAtEvenIndices([5, 0, 15, 0, 25, 0])
* returns: 45
*/
function sumNumbersAtEvenIndices(n) {
    //creates a variable called evenIndicies to equal 0
    let evenIndicies = 0;
    
    //loop through the n array let i = zero, i is less than the array n length and iterate by (2)
    for(let i = 0; i < n.length; i += 2){

        //add the even indicy at the iteration through the n array to the evenIndicies
        evenIndicies += n[i];
    }
    //now return the updated variable with the added even indicies
    return evenIndicies;
}

module.exports = sumNumbersAtEvenIndices
