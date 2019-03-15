// Dependencies
const http = require("http");
const url = require("url");
const stringDecoder = require("string_decoder").StringDecoder;

const server = http.createServer(function(req, res) {
  // Get the URl and parse it
  let parsedUrl = url.parse(req.url, true);

  // Get the path
  let path = parsedUrl.pathname;
  let trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // Get the query string as an object
  let queryStringObject = parsedUrl.query;

  //Get the HTTP method
  let method = req.method.toLowerCase();

  //Get Headers
  let headers = req.headers;

  //Get payload
  let decoder = new stringDecoder("utf-8");
  let buffer = "";
  req.on("data", function(data) {
    buffer += decoder.write(data);
  });

  req.on("end", function() {
    buffer += decoder.end();

    // Send the response
    res.end("Hello World \n");

    // Log the request
    console.log("Request received with this payload: ", buffer);
  });
});

server.listen(8000, function() {
  console.log("The server is listening on 8000");
});
