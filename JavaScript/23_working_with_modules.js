console.log("Main file is being triggerred");

// Importing the module 
const modules = require("./23_mod");

// taking a common array 
let array = [23, 4, 56, 45];

// Function Call being made
console.log(modules.avg(array));
console.log(modules.sum(array));