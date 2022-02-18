/**
* Removes all strings ending in "!" from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that don't end with "!"
*
* ex: removeStringsEndingInBang(["Hello", "Hi!", "Greetings"])
* returns: ["Hello", "Greetings"]
*
* ex: removeStringsEndingInBang(["!", "", "a"])
* returns: ["", "a"]
*/

function removeStringsEndingInBang(arr) {

    for (let i = 0; i < arr.length ; i++){
        //conditional statement if element arr at indicater has a bang operatoron the end .slice(-1) removes the last index 
        if(arr[i].slice(-1) === '!' ){
            //splice(which emelent at the i indicater, remove just 1 element from the arr)
            arr.splice(i,1)
        }
    }
    //return updated arr with the removed elements with the bang on the end ONLY
    return arr;
}

module.exports = removeStringsEndingInBang
