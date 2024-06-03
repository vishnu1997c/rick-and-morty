const express = require("express");
const router = express.Router();
const {getHomePage, getSearch, getWeather} = require("../controllers/home");

router.route("/").get(getHomePage);
router.route("/search").get(getSearch);
router.route("/get-weather").get(getWeather);

module.exports = router;