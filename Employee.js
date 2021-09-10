/* UC5-Calculate employee wage till maximum 160 hrs and maximum 20 days */

// constants 
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAY = 20;
const MAX_HRS_IN_MONTH = 160;
// variable
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empWage;

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
while(totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAY){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()* 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total days:" + totalWorkingDays +" "+"Total Hours:" + totalEmpHrs +" " +"Total monthly employee wage:" + empWage);


