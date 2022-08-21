const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(
    `<!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="decription" content="This is my first program">
      <meta name="robots" content="FOLLOW,INDEX">
      <meta name="keywords" content="C++,C and Python">
      <title>All Programs</title>

      <!-- This is how you include CSS in your HTML -->
      <link rel="stylesheet" href="test.css">

      <!-- This is how you include JavaScript in your HTML -->
      <script src="test.js"></script>
  </head>

  <body>
      This is me moving to backend programming with one and only hero in the house node.js feat Biswajit Mishra.
  </body>

  </html>`
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});