const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {

};
app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
