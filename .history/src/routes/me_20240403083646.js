const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.get("/create", meController.create);

module.exports = router;
