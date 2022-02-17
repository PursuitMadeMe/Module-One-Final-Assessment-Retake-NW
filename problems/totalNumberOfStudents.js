/**
* Returns the total number of students in all classes
* 
* @param {object[]} arr - The input array of classes. Objects will be in the form: { subject: "math", studentCount: 30 }
* @returns {number} - The total number of students
* 
* ex: totalNumberOfStudents([{subject: "A", studentCount: 10}, {subject "B", studentCount: 100}])
* returns: 110 
* 
* ex: totalNumberOfStudents([{subject: "Math", studentCount: 50}, {subject: "Gym", studentCount: 17}, {subject: "Art", studentCount: 100}])
* returns: 167
*/

function totalNumberOfStudents(arr) {

    //create a variable to equal zero
    let count = 0;
    //loop thoguth the array of student objects
    for(let i = 0; i < arr.length; i++)
    //conditional statement iteration through array at studentCount key value
    if(arr[i].studentCount){
        //add that iteration value to the variable count 
        count += arr[i].studentCount
    }
    //return the new count with the added values
    return  count;
}

module.exports = totalNumberOfStudents
