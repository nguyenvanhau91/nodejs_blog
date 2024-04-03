const newsRouter = require("./news");

function route(app) {
  app.use("/news", newsRouter);

  app.use("")
  app.get("/", (req, res) => {
    res.render("home");
  });
}

module.exports = route;
