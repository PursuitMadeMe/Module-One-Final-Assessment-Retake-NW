/**
* Returns an array of class names sorted by number of students, from lowest to highest
* 
* @param {object[]} arr - The input array. Objects will be in the form: { subject: "math", studentCount: 10 }
* @returns {string[]} - Returns an array of class names, sorted by class size in ascending order (lowest to highest)
* 
* ex: sortClassesBySize([ {subject: "math", studentCount: 50}, {subject: "gym", studentCount: 10}, {subject: "history", studentCount: 300}])
* returns: ["gym", "math", "history"] (from fewest to most students)
*
* ex: sortClassesBySize([ {subject: "C", studentCount: 47}, {subject: "B", studentCount: 1}, {subject: "A", studentCount: 88}]) 
* returns: ["B", "C", "A"]
*/

function sortClassesBySize(arr) {
    let classCount = 0;
    let classNames = [];

    // for (let i = 0; i < arr.length; i++){
    //     if(arr[i].studentCount > classCount)
    //     classNames.push(arr[i].subject)

    //     classNames.sort().reverse();
    // }
    //It will sort array on the basis of student Count in ascending order
    //.sort is putting arr at studentCount in order from smallest to larget (-) meaning descending order
    arr.sort((a,b)=> a.studentCount -b.studentCount)
    //loop through the arr length which is now sorted in order 
    for(i=0;i<arr.length;i++){
        //then push just the subject into the array called classNames from  the sorted order 
        classNames.push(arr[i].subject)
    }
    //return those subject names in specified order 
        return classNames;
}

module.exports = sortClassesBySize
