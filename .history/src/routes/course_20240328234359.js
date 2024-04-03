const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/NewsController");

router.get("/:slug", newsController.show);

module.exports = router;
