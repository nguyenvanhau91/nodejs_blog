const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const port = 3000;

const app = express();

const route = require("./routes");

//todo Static file & SASS
app.use(express.static(path.join(__dirname, "public")));

//todo Middleware: body-parser
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//todo HTTP logger
// app.use(morgan("combined"));

//todo Template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs", // cấu hình file có đuôi .hbs thay vì .handlebars (quá dài)
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//todo Route init



app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("searchs");
});

app.post("/search", (req, res) => {
  console.log(req.body.gender);
  res.send("");
});

app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
