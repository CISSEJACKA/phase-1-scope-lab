// declare customerName to be bob in global scope
var customerName = 'bob';

// returns the customerName
function returnCustomerName() {
    return customerName;
}

// modifies the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// setBestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; // Notice that `bestCustomer` is not declared with `var`, `let`, or `const`.
}

// overwriteBestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Notice that `bestCustomer` is not declared with `var`, `let`, or `const`.
}

// declare a constant leastFavoriteCustomer and assign it some initial value
const leastFavoriteCustomer = 'someone';

// unsuccessfully tries to reassign the least favorite customer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new least favorite'; // Attempting to change a constant will result in an error.
}
