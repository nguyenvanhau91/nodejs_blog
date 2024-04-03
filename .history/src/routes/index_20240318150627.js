const newsRouter = require("./news");
const siteRouter = require("./site");
const contactRouter = require("./")

function route(app) {

  app.use("/news", newsRouter);
  app.use("/contact", )
  app.use("/", siteRouter);
}

module.exports = route;
