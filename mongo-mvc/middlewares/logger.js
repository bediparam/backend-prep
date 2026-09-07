const fs = require("fs");

function logger(req, res, next) {
  console.log(`requested URL: ${req.originalUrl}`);
  next();
}

function textLogger(req, res, next) {
  let info = "";
  switch (req.method) {
    case "GET":
      info += "Viewing Users";
      break;

    case "POST":
      info += "Creating User";
      break;

    case "DELETE":
      info += "Deleting User";
      break;

    case "PATCH":
      info += "Editing User";
      break;

    default:
      break;
  }
  let data = `{method: ${req.method}, action: ${info}, time: ${new Date()} }\n`;

  fs.writeFile("./data/log.txt", data, { flag: "a" }, (err) => {
    if (err) {
      console.error("found an error while writing log", err);
    }
    console.log("text logged to log.txt file");
    next();
  });
}

module.exports = { logger, textLogger };
