const express = require("express");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readdir("./data", (err, files) => {
    if (err) res.send(err);
    else {
      res.render("index.ejs", { files: files });
    }
  });
});

app.get("/create", (req, res) => {
  fs.readdir("./data", (err, files) => {
    if (err) res.send(err);
    else {
      res.render("create.ejs", { files: files });
    }
  });
});

app.post("/create-file", (req, res) => {
  const { filename, filedata } = req.body;
  fs.writeFile(`./data/${filename}`, filedata, (err) => {
    if (err) res.send(err);
    else {
      res.redirect("/");
    }
  });
});

app.get("/edit", (req, res) => {
  fs.readdir("./data", (err, files) => {
    if (err) res.send(err);
    else {
      let filename = req.query.filename;
      fs.readFile(`./data/${filename}`, "utf-8", (err, data) => {
        data = data.trim();
        res.render("edit.ejs", { files, data, filename });
      });
    }
  });
});

app.post("/update", (req, res) => {
  let { filename, filedata } = req.body;
  filedata = filedata.trim();
  fs.writeFile(`./data/${filename}`, filedata, (err, data) => {
    if (err) res.send(err);
    else {
      // sends back to the same url from where it started
      res.redirect(req.get("referer"));
    }
  });
});

app.listen(8000, () => {
  console.log("server is running");
});
