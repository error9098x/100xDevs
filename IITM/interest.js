/*
 * calculateSimpleInterest calculates and returns the simple interest
 * (floor value) for a fixed deposit. Formula used is,

 * calculateSimpleInterest calculates and returns the simple interest
 * for a fixed deposit. Formula used is,
 * Simple Interest: P X R X T / 100
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/

/*
 * calculateCompoundInterest calculates and returns the compound interest
 * (floor value) for a fixed deposit. Formula used is,
 *   Compound Interest=P[(1+I/100)^N - 1]
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/

/*
 * extraAmountPercentage calculates and returns the extra amount percentage borrower will have to pay in case of
 * compound interest (floor value) in comparison to the simple interest for a fixed deposit.

 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - Daily interest rate.
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} percentage
*/
function isDate(value) {
    return !isNaN(Date.parse(value));
}
function checkinput(principal, dailyInterest, startingDate, endingDate) {
  console.log(isDate(startingDate))
  console.log(isDate(endingDate))
    if (isNaN(principal) || isNaN(dailyInterest) || !isDate(startingDate) || !isDate(endingDate)) {
        return false;
    }
    return true;
  }
function calculateSimpleInterest(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) { 
    //check if input is wrong
    if (checkinput(principal, dailyInterest, startingDate, endingDate) == false) {
        return -1;
    }
    startingDate = Math.round(new Date(Date.parse(startingDate)).getTime() / 86400000);
    endingDate = Math.round(new Date(Date.parse(endingDate)).getTime() / 86400000);
    interest = principal * dailyInterest * (endingDate - startingDate) / 100;
    
return Math.floor(interest);

}

function calculateCompoundInterest(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {
    if (checkinput(principal, dailyInterest, startingDate, endingDate) == false) {
        return -1;
    }
    startingDate = Math.round(new Date(Date.parse(startingDate)).getTime() / 86400000);
    endingDate = Math.round(new Date(Date.parse(endingDate)).getTime() / 86400000);
    interest = principal * (Math.pow((1 + dailyInterest / 100), (endingDate - startingDate)) - 1);

return Math.floor(interest);

}

function extraAmountPercentage(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {
    if (checkinput(principal, dailyInterest, startingDate, endingDate) == false) {
        return -1;
    }
    simple_interest = calculateSimpleInterest(principal, dailyInterest, startingDate, endingDate);
    compound_interest = calculateCompoundInterest(principal, dailyInterest, startingDate, endingDate);
    percentage = Math.floor((compound_interest - simple_interest) / simple_interest * 100);

return Math.floor(percentage);

}

console.log(calculateCompoundInterest(1000, 10, "A", "2015-03-30"))