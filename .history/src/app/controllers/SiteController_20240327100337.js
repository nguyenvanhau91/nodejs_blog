const Course = require("../models/Courses");

class SiteController {
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json()
    } catch (error) {}
    // res.render("home");
  }

  search(req, res) {
    res.render("searchs");
  }
}

module.exports = new SiteController();
