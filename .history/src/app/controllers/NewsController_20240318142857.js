class NewsController {
  //* GET /news
  index(req, res) {
    res.render("news");
  }

  //* GET /news/:slug
  show(req, res)
}

module.exports = new NewsController();
