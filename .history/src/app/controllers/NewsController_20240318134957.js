class NewsController {
  //* GET /news
  index(req, res) {
    res.render("n");
  }
}

module.exports = new NewsController();
