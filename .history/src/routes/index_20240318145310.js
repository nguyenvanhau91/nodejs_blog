const newsRouter = require("./news");

function route(app) {
  app.use("/news", newsRouter);

  a
  app.get("/", (req, res) => {
    res.render("home");
  });
}

module.exports = route;
