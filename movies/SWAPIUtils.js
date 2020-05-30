const axios = require("axios");

function SWAPIUtils() {
    const swu = {};
    let movies = [];

    swu.getMovies = () => movies;

    swu.runAPI = () => {
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
    swu.setPlanets = (indexMovie) => {
        /*
            for (let i = 0; i < movies[indexMovie].planets.length; i++) {
                const element = movies[indexMovie].planets[i];
                console.log("Movie: ", element);
            }*/
    };
    swu.runAPI();
    swu.setPlanets();
    return swu;
}
module.exports = SWAPIUtils();