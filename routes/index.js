const express = require("express");
const axios = require("axios");
const router = express.Router();

let movies = [];

const runAPI = () => {
    for (let i = 1; i <= 6; i++) {
        axios
            .get(`https://swapi.dev/api/films/${i}/`)
            .then(function(response) {
                // handle success
                movies.push(response.data);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(function() {
                // always executed
            });
    }
};

runAPI();

/* GET home page. */
router.get("/", function(req, res, next) {
    console.log(movies);
    res.render("index", { movies: movies });
});

module.exports = router;