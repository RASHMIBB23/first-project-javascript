const hhtp = require("http");

const hostname = "127.0.1";
const port = 3000;

const sever = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello ice tead");
});
server.listen(port, hostname, () => {
  console.log("server is listening at http://${hostname}:${port}");
});
