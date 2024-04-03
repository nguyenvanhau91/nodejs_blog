const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:id/edit", courseController.edit);
router.put("/:id", courseController.update);
app.get('/me/stored-courses/:id', (req, res) => {
    const courseId = req.params.id;
});
router.get("/:slug", courseController.show);

module.exports = router;
