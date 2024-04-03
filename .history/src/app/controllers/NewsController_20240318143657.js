class NewsController {
  //* GET /news
  index(req, res) {
    res.render("news");
  }

  //* GET /news/:slug
  newDetail(req, res) {
    res.send("show news");
  }
}

module.exports = new NewsController();
