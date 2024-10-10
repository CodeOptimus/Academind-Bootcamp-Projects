// Single line comment
/* This is a multiple line comment. The browser does not execute any of them. They only provide information
concerning the code written.
*/

let courseName = "Blockchain Developer - Zero to Hero.";
let coursePrice = "$30.00";
let courseGoals = ["Understand the basics of web3", "Learn to develop smart contracts", "Become a blockchain developer"];

alert(courseName);
alert(coursePrice);
alert(courseGoals);

let onlineCourse = {
    courseName : "Blockchain Developer - Zero to Hero.",
    coursePrice : "$30.00",
    courseGoals : ["Understand the basics of web3", "Learn to develop smart contracts", "Become a blockchain developer"]
};
alert(onlineCourse.courseName);
alert(onlineCourse.coursePrice);
alert(onlineCourse.courseGoals);

alert(onlineCourse.courseGoals[1]);


function getListItem(array, arrayIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;
}


let firstGoal = getListItem(onlineCourse.courseGoals, 0);
alert(firstGoal);