const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const methodOverride = require("method-override");
const port = 3000;

//todo Connect with DB
const db = require("./config/db");
db.connect();

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

//todo Override transfer method POST to PUT
app.use(me)

//todo Template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs", // cấu hình file có đuôi .hbs thay vì .handlebars (quá dài)
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//todo Route init
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
