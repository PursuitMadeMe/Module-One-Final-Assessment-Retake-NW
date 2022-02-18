/**
 * Takes an object where the keys are people's names and the values are their ages.
 * Returns the name of the person with the greatest age.
 *
 * @param {object} obj - The input object of the form { 'Joe': 42, 'Tanya': 11 }
 * @returns {string} - Returns the name of the oldest person
 *
 * ex: oldestPerson({ 'Joe': 42, 'Tanya': 11 })
 * returns: "Joe"
 *
 * ex: oldestPerson({ 'Marcus': 29, 'Julia': 29, 'Kevin': 34 })
 * returns: 'Kevin'
 */
function oldestPerson(obj) {
    greatestAge =-1 ;
    let name;
    //looping through an object use the FOR IN loop ONLY
    //Key is equal to the key name 
    for(var key in obj){
            //conditional statement if the greatesAge variable is less than the object key looped on 
        if(greatestAge < obj[key]){
            //greatestAge value changes to that key 
            greatestAge=obj[key]
            //lets key equal to the name in the object 
            name=key
        }
    }
    //return the name that now has the greatest age after comparison statement to the variable 
    return name
    
    }



module.exports = oldestPerson