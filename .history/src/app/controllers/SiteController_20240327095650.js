const Course = require("../models/Courses");

class SiteController {
  index(req, res) {
    Course.find({}, function (err, courses) {
        if(!err) 
    });
    // res.render("home");
  }

  search(req, res) {
    res.render("searchs");
  }
}

module.exports = new SiteController();
