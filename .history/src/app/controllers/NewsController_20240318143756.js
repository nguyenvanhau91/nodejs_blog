class NewsController {
  //* GET /news
  index(req, res) {
    res.render("news");
  }

  //* GET /news/:slug
  details(req, res) {
    res.send("show news");
  }
}

module.exports = new NewsController();
