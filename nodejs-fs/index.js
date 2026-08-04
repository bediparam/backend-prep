const http = require("http");

const server = http.createServer((req, res) => {
  const log = `${new Date().toLocaleDateString()}, server requested - ${req.url}`;
  console.log(log);

  switch (req.url) {
    case "/":
      res.end("<h1>this is home page</h1>");
      break;

    case "/about":
      res.end("<h1>this is about page</h1>");
      break;

    default:
      res.end("<h1>404, not found</h1>");
  }
});

server.listen(8000, () => {
  console.log("server running on port - 8000");
});
