const Course = require("../models/Courses");

class SiteController {
//   async index(req, res) {
//     try {
//       const courses = await Course.find({});
//       res.json(courses);
//     } catch (error) {
//       console.log(error);
//       res.status(400).json({ error: "ERROR!!!" });
//     }
//     // res.render("home");
//   }

    Course.find({}, function(err, courses) {
        
    })

  search(req, res) {
    res.render("searchs");
  }
}

module.exports = new SiteController();
