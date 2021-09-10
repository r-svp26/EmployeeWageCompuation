/* UC2-calculate employee wage */

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
// constants 
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
// variable
let empHrs, empWage;

let empCheck = Math.floor(Math.random()* 10) % 3;
empHrs=getWorkingHours(empCheck);
empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage:" + empWage);


