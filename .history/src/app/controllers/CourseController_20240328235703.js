const Course = require("../models/Courses");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CourseController {
    //todo [GET] /courses/:slug
    show(req, res) {
        res.send("COURSE DETAIL -" + req.pa);
    }
}

module.exports = new CourseController();