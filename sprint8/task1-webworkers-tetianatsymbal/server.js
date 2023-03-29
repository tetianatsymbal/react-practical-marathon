const http = require("http");
const fs = require("fs");
const url = require("url");

const HOST = "localhost";
const PORT = 8000;

http
  .createServer(function (request, response) {
    const path = url.parse(request.url).pathname;

    fs.readFile(__dirname + path, function (error, data) {
      if (error) {
        response.writeHeader(404);
        response.write("NOT FOUND");
        response.end();
      } else {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      }
    });
  })
  .listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
  });
