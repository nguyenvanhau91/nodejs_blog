class NewsController {
  //* GET /news
  index(req, res) {
    res.render("news");
  }

  //* GET /news
}

module.exports = new NewsController();
