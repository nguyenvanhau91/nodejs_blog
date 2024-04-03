const newsRouter = require("./news");

function route(app) {

  app.use("/news", newsRouter);

  app.get("/", (req, res) => {
    res.render("home");
  });

  app.get("/search", (req, res) => {
    res.render("searchs");
  });

  app.post("/search", (req, res) => {
    console.log(req.body.gender);
    res.send("");
  });
}

module.exports = route;
