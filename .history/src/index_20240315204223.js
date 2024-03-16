const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const port = 3000;

const app = express();

//todo HTTP logger
app.use(morgan("combined"));

//todo Template engine
app.engine(".hbs", handlebars.engine());
 
app.get("/", (req, res) => {
  return res.send(`<h4>hi bo</h4>`);
});
app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
