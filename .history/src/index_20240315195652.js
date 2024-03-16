const express = require("express");
const morgan = require("morgan");
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

//* HTTP logger
app.use(morgan("combined"));

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.get("/", (req, res) => {
  return res.send(`<h4>hi bo</h4>`);
});
app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
