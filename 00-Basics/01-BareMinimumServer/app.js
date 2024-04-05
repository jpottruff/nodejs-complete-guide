// Run the following
//  cd /00-Basics/01-BareMinimumServer
//  node app.js

const http = require("http");

function killServer() {
  process.exit();
}

// function reqListener(req, res) {
//   console.log("hello named callback function", req);
// }

// Option 1
// const server = http.createServer(reqListener);

// Option 2
// const server = http.createServer(function (req, res) {
//   console.log("hello anonymous function", req);
// });

// Option3
const server = http.createServer((req, res) => {
  // console.log("hello arrow function", req);
  console.log("hello arrow function", req.url, req.method, req.headers);
});

server.listen(3000);
