const Course = require("../models/Courses");

class SiteController {
  index(req, res) {
    try {
        
    } catch (error) {
        
    }
    // res.render("home");
  }

  search(req, res) {
    res.render("searchs");
  }
}

module.exports = new SiteController();
