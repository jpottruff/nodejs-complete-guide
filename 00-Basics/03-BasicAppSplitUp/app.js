/**
 * To Run:
 *   cd /00-Basics/03-BasicAppSplitUp
 *   node app.js
 *
 * Navigate to http://localhost:3000/
 */

const http = require("http");
const routes = require("./routes");

// OPTION 1 - module exporting 1 thing
// const server = http.createServer(routes);

// OPTION 2 - module exports multiple things (access by property)
console.log(routes.someText);
const server = http.createServer(routes.handler);
server.listen(3000);
