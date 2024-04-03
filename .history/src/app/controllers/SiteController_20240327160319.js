const Course = require("../models/Courses");

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = courses.
        courses = res.render("home", { courses });
      })
      .catch(next);
  }

  search(req, res) {
    res.render("searchs");
  }
}

module.exports = new SiteController();
