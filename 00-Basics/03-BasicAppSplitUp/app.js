/**
 * To Run:
 *   cd /00-Basics/03-BasicAppSplitUp
 *   node app.js
 *
 * Navigate to http://localhost:3000/
 */

const http = require("http");
const routes = require("./routes");
const server = http.createServer(routes);
server.listen(3000);
