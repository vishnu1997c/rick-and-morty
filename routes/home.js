const express = require("express");
const router = express.Router();
const {getCharacter, singleCharacter} = require("../controllers/home");

router.route("/").get(getCharacter);
router.route("/character").get(singleCharacter);

module.exports = router;