const start_time = new Date();

const file = require("fs");

//Creating a file 
process.stdout.write("Creating a File")
file.writeFileSync("test.txt", "This is me creating a text file using nodejs");
process.stdout.write(" Done !!\n")

//Reading the file
process.stdout.write("Reading the File")
let text = file.readFileSync("test.txt", "utf-8");
process.stdout.write(" Done !!\n")

//Printing the content
console.log("Content in the file is -->> ", text);

const end_time = new Date();

// Time Taken
console.log("This program took " + (end_time - start_time) / 1000 + " seconds to execute itself !!");
