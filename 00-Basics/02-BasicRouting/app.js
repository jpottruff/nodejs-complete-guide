/**
 * To Run:
 *   cd /00-Basics/02-BasicRouting
 *   node app.js
 *
 * Navigate to http://localhost:3000/
 */

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    // HTML Response
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    // NOTE: return is not required but it will allow us to exit the function without continuing execution of it
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    // * DATA PARSING
    const body = [];
    // * eventListener for Buffer / data stream
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const msg = parsedBody.split("=")[1];
      // NOTE: writeFileSync WILL block code execution until it finishes (vs. writeFile)
      fs.writeFileSync("message.txt", msg);
    });

    // * RESPONSE
    res.statusCode = 302;
    // * Send a redirect to the user to '/'
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Simple Page</title></head>");
  res.write("<body><h1>My Page</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
