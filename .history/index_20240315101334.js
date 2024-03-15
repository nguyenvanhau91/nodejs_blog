const express = require("express");
const app = express();
const port = 3000;

app.get("/trang-chu", (req, res) => res.send("Hello World, boDev"));
app.listen(port, () => console.log(`hãy mở link: http://localhost:${port}`));
