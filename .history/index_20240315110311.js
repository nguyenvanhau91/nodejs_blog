const express = require('ex');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World, boDev"));
app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
