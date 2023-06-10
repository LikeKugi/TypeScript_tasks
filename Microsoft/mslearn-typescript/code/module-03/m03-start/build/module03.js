"use strict";
/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
/*  Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms) {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerms) {
    // Calculates the monthly payment of a conventional loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
let interestOnlyPayment = calculateInterestOnlyLoanPayment({ interestRate: 30000, principle: 5 });
let conventionalPayment = calculateConventionalLoanPayment({ interestRate: 30000, principle: 5, months: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
