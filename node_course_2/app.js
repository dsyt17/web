const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const DOMAIN = "localhost";

const createPath = (page) =>
  path.resolve(__dirname, "frontend", `${page}.html`);

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");

  let basePath = "";
  switch (req.url) {
    case "/":
      basePath = createPath("index");
      res.statusCode = 200;
      break;
    case "/testcalc":
      res.statusCode = 301;
      res.setHeader("Location", "/calc");
      res.end();
      break;
    case "/calc":
      basePath = createPath("calc");
      res.statusCode = 200;
      break;
    case "/games":
      basePath = createPath("games");
      res.statusCode = 200;
      break;
    default:
      res.statusCode = 404;
      res.write(`<h1>${req.url} non found 404</h1>`);
      res.end();
      break;
  }
  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err.message);
      res.statusCode = 500;
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, DOMAIN, (error) => {
  error
    ? console.log(error)
    : console.log(`server started on ${DOMAIN}:${PORT}`);
});
