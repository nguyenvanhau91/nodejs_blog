const newsRouter = require("./news");
const siteRouter = require("./site");
const contactRouter = require("./contact");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/contact", contactRouter);
  app.use

  app.use("/", siteRouter);
}

module.exports = route;
