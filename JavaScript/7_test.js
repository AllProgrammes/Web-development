let name0 = "Biswajit";
let name1 = "Bisu";
let name2 = "Biswa";
let name3 = "Bebo";

//Given below is the typical way of doing this withour using function 
// console.log(name0 + " is a god boy.")
// console.log(name1 + " is a god boy.")
// console.log(name2 + " is a god boy.")
// console.log(name3 + " is a god boy.")

// This is a more sexy way using function
function greet(name, text = "is a good boy") {
  console.log(`${name} ${text}`)
  // or we can also do like this
  console.log(name + " " + text)
}
greet(name0);
greet(name1);
greet(name2);
greet(name3);

function sum(num1, num2, num3) {
  return (`Sum of ${num1} ${num2} and ${num3} is -> ${num1 + num2 + num3}`);
  // and and and whatever comes after return is not executed no matter what u do 
}
console.log(sum(1, 2, 3));