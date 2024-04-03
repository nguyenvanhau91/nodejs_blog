const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const port = 3000;

const db = require("./config/db");
db.

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
route(app);

app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
