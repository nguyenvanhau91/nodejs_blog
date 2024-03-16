const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars").create();
const port = 3000;

const app = express();

//todo HTTP logger
app.use(morgan("combined"));

//todo Template engine
// app.engine(".hbs", exphbs.engine());
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  // return res.send(`<h4>hi bo</h4>`);
  return res.render("index", { pageTitle: "Home Page"});
});
app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
