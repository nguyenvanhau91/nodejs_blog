const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const port = 3000;

const app = express();

//todo HTTP logger
app.use(morgan("combined"));

//todo Template engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("view", path);

app.get("/", (req, res) => {
  res.render("Home");
});
app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
