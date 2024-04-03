const express = require("express");
const router = express.Router();

const contactController = require("../app/controllers/ContactController");

router.use("/:slug", contactController.index);
router.use("/", contactController.index);

module.exports = router;
