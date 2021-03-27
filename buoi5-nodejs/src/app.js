//IMPORT MODULES
const http = require("http");
const modules = require("./module");
const {
  readFileSync,
  readFileASync,
  readDirectoryName,
  readFileName,
} = modules;

const hostname = "127.0.0.1";
const port = 3000;

//CREATE SERVER
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world 1 2 3 ");
});

server.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
  console.log("Start");
  //blocking
  console.log("Content: ", readFileSync());
  console.log("End");
  readFileASync();
  readFileName();
  readDirectoryName();
});
