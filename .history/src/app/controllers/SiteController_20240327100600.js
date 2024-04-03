const Course = require("../models/Courses");

class SiteController {
  //   async index(req, res) {
  //     try {
  //       const courses = await Course.find({});
  //       res.json(courses);
  //     } catch (error) {
  //         console.log(error);
  //         res.status(400).json({ error: "ERROR!!!" });
  //     }
  //     // res.render("home");
  //   }

  index(req, res) {
    Course.find({})
      .then((courses) => {
        res.json(courses);
      })
      .catch((error) => {
        console.error(error);
        res.status(400).json({ error: "ERROR!!!" });
      });
  }

  search(req, res) {
    res.render("searchs");
  }
}

module.exports = new SiteController();
