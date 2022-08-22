// Importing Required modules 
const http = require("http");
const fs = require("fs");

// Storing the content of the file which we want to host
const text = fs.readFileSync("PROJECTS\\1_clock.html", "utf-8");

// Creating a server which takes request and gives response too
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(text);
})

// Selecting  port to host on
server.listen(80, "127.0.0.1", () => {
  console.log("Listening on port 80");
})
