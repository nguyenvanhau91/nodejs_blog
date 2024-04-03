const newsRouter = require("./news");
const contactRouter = require("./contact");
const siteRouter = require("./site");
const coursesRouter = require("./course");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/contact", contactRouter);
  app.use("/courses", coursesRouter);

  app.use("/", siteRouter);
}

module.exports = route;
