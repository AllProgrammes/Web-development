// Importing required modules
const http = require('http');
const fs = require("fs");

// Selecting the port and hostname
const hostname = '127.0.0.1';
const port = 3000;

// Copying the content of the html file
const home = fs.readFileSync("21_home.html", "utf-8");
const services = fs.readFileSync("21_services.html", "utf-8");
const offers = fs.readFileSync("21_offers.html", "utf-8");
const contact = fs.readFileSync("21_contact.html", "utf-8");

// Handling the request and response
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if (req.url == "/home" || req.url == "/") {
    res.end(home)
  }
  else if (req.url == "/services") {
    res.end(services)
  }
  else if (req.url == "/offers") {
    res.end(offers)
  }
  else if (req.url == "/contact") {
    res.end(contact)
  }
  else {
    res.statusCode = 404;
    res.end(
      `<h3>ERROR 404</h3>
    <h2>PAGE NOT FOUND</h2>`)
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});