const express = require("express");
const router = express.Router();

const contactController = require("../app/controllers/ContactController");

router.("/add-friends", contactController.addFriend);
router.("/", contactController.index);

module.exports = router;
