/* UC2-calculate employee wage */

// constants 
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
// variable
let empHrs, empWage;

let empCheck = Math.floor(Math.random()* 10) % 3;
switch (empCheck){
    case IS_FULL_TIME:
        empHrs = 8;
        break;
    case IS_PART_TIME:
        empHrs = 4;
        break;
    default:
        empHrs = 0;
        break;
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage:" + empWage);


