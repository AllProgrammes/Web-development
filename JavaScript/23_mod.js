console.log("Module File has been triggered");

// Functions
function average(array) {
  let sum = 0
  array.forEach(element => {
    sum += element;
  });
  return `Average of ${array.length} numbers is : ${sum / array.length}`;
}

function sum(array) {
  let total = 0;
  array.forEach(element => {
    total += element;
  });
  return `Sum of all the number in the given array is : ${total}`;
}

// Module Exports -> it contains what fucntions will be exported to other programs
module.exports = {
  avg: average,
  sum: sum
}