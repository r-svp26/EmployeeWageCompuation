/* UC4-calculate monthly wage */

// constants 
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAY = 20;
// variable
let empHrs = 0, empWage;
// function to get daily working hours
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_FULL_TIME:
            return 8;
        case IS_PART_TIME:
            return 4;
        default:
            return 0;
    } 
}
// calculate monthly wage for 20 days.
for (let day = 1; day <= NUM_OF_WORKING_DAY; day++){
    let empCheck = Math.floor(Math.random()* 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours:" +empHrs +" " +"Monthly employee wage:" + empWage);


