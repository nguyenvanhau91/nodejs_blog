const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

//* HTTP logger
app.use(morgan("combined"));

//* Template Engine
app.engine("handlebars", engine());

app.get("/", (req, res) => {
  return res.send(`<h4>hi bo</h4>`);
});
app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
