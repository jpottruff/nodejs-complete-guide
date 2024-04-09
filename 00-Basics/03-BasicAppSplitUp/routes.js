const fs = require("fs");

// OPTION 1
// function requestHandler(req, res) {
//   const url = req.url;
//   const method = req.method;
// }

// OPTION 2
const requestHandler = (req, res) => {
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
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const msg = parsedBody.split("=")[1];

      // NOTE: writeFile will allow other requests to be processed which is ideal when writing large files
      fs.writeFile("message.txt", msg, (err) => {
        // if (err) // handle...

        // * RESPONSE (WHEN DONE WITH FILE)
        res.statusCode = 302;
        // * Send a redirect to the user to '/'
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Simple Page</title></head>");
  res.write("<body><h1>My Page</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
