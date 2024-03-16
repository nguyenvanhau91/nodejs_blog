const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const port = 3000;

const app = express();

//todo HTTP logger
app.use(morgan("combined"));

//todo Template engine
app.engine("hbs", handlebars.engine({
  extname: ".hbs" // cấu hình 
}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
