const Course = require("../models/Courses");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
//   index(req, res, next) {
//     Course.find({})
//       .then((courses) => {
//         courses = res.render("home", {
//             courses: multipleMongooseToObject(courses)
//         });
//       })
//       .catch(next);
//   }
    index(req, res, next) {
        Course.find({})
        .then((course => ))
    }

  search(req, res) {
    res.render("searchs");
  }
}

module.exports = new SiteController();
