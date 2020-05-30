const express = require("express");
const wsu = require("../movies/SWAPIUtils");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { movies: wsu.getMovies() });
});

module.exports = router;