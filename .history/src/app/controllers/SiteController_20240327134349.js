const Course = require("../models/Courses");

class SiteController {
  index(req, res, next) {
    Course.find({}).then((courses) => res.json(courses)).cah;
    // res.render("home");
  }

  search(req, res) {
    res.render("searchs");
  }
}

module.exports = new SiteController();
