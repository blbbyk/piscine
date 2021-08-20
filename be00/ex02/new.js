


const http = require('http');
const server = http.createServer();
const hostname = 'localhost';
const port = 4242;
const fs = require('fs');
var fileMethod = {};

fileMethod["GET"] = (request, response) => {
  try {
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
    });
    var get = JSON.parse(fs.readFileSync("./data.json"));
    if (JSON.stringify(get) === "{}") {
      response.end("empty");
      return;
    }
    get.message = "Content retrieved successfully.";
    fs.writeFile("./data.json", JSON.stringify(get), (err) => {});
    response.end(JSON.stringify(get));
  } catch {
    response.writeHead(500);
    response.end("can't read/write data file");
  }
};


let app = http.createServer((request, response) => {
    if (request.url === "/file") {
      if (fileMethod[request.method])
        fileMethod[request.method](request, response);
    } else {
      response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("index");
    }
  });
  app.listen(4242, () => {
    console.log("Server running at http://localhost:4242/");
  });
  
  fs.readdir("./", (err, list) => {
    if (list.indexOf("data.json") === -1) {
      fs.writeFile("./data.json", "{}", (err) => {});
    }
  });