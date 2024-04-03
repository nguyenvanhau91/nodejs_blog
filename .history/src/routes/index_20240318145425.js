const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/search", siteRouter);

app.use("/")

module.exports = route;
