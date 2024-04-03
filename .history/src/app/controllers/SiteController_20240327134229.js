const Course = require("../models/Courses");

class SiteController {
  async index(req, res) {
    
    // res.render("home");
  }

  search(req, res) {
    res.render("searchs");
  }
}

module.exports = new SiteController();
