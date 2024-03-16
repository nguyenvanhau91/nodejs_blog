const express = require("express");
const morgan = require("morgan");
const ex = require("express-handlebars");
const port = 3000;

const app = express();

//* HTTP logger
app.use(morgan("combined"));

app.engine("handlebars", handlebars());

app.get("/", (req, res) => {
  return res.send(`<h4>hi bo</h4>`);
});
app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
