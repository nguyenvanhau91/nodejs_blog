const newsRouter = require("./news");
const siteRouter = require("./");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/search", )
  app.get("/", (req, res) => {
    res.render("home");
  });
}

module.exports = route;
