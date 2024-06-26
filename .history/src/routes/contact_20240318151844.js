const express = require("express");
const router = express.Router();

const contactController = require("../app/controllers/ContactController");

router.use("/contact", contactController.index);

module.exports = router;
