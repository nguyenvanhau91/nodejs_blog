const express = require('');
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

//* HTTP Logger
app.use(morgan("combined"));



app.get("/", (req, res) => {
  return res.send(`<h4>hi bo</h4>`);
});
app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
