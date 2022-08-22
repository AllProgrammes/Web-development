process.stdout.write("This is me learning blocking and non blocking execution types of nodejs codes\n");

const file = require("fs");

// Synchronous or Blocking 
let text = file.readFileSync("test.txt", "utf-8");
console.log(text); //-> This type of codes execute even if the previous code was not completely done

// Asynchronous or Non-Blocking 
file.readFile("test.txt", "utf-8", (error, data) => {

  //-> this type of codes will execute itself when it gets a green signal
  if (error == null) {
    console.log(data);
  } else {
    console.log("Error : ", error);
  }
})