const Course = require("../models/Courses");

class SiteController {
    index(req, res) {
        Course.find({}, function())
        // res.render("home");
    }

    search(req, res) {
        res.render("searchs");
    }
}

module.exports = new SiteController();