const fs = require("fs");

function readFileSync() {
  const content = fs.readFileSync("./src/greeting.txt");
  return content.toString();
}

function readFileASync() {
  fs.readFile("./src/greeting.txt", (err, data) => {
    if (err) throw err;
    console.log("Async content: ", data.toString());
  });
}

function readFileName() {
  console.log("FileName: ", __filename);
}

function readDirectoryName() {
  console.log("DirectoryName: ", __dirname);
}

module.exports = {
  readFileSync,
  readFileASync,
  readDirectoryName,
  readFileName,
};
