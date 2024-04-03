const newsRouter = require("./")

function route(app) {
  app.get("/", (req, res) => {
    res.render("home");
  });

  app.get("/news", (req, res) => {
    res.render("news");
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
