require('dotenv').config();

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');
let directory_name = './';
let fileNames = fs.readdirSync(directory_name);

//Secret key from .env file
const secretKey = process.env.SECRET_KEY;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  let f = '';
  fileNames.forEach((file) => {
    f = f + file + ' \n';
  });
  f = f + '\nSecret Key: ' + secretKey;
  res.end(f);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
