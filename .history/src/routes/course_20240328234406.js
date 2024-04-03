const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/");

router.get("/:slug", newsController.show);

module.exports = router;
