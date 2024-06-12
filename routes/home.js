const express = require("express");
const router = express.Router();
const {getCharacter, singleCharacter, search} = require("../controllers/home");

router.route("/").get(getCharacter);
router.route("/character").get(singleCharacter);
router.route("/search").get(search);

module.exports = router;