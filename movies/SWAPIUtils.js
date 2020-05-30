const axios = require("axios");

function SWAPIUtils() {
    const swu = {};
    let movies = [];

    swu.getMovies = () => movies;

    swu.runAPI = () => {
        for (let i = 0; i < 6; i++) {
            axios
                .get(`https://swapi.dev/api/films/${i + 1}/`)
                .then(function(response) {
                    // handle success
                    movies.push(response.data);
                    swu.setPlanets(i, response.data.planets);
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
    swu.setPlanets = (indexMovie, planets) => {
        const newPlanets = [];
        for (let i = 0; i < planets.length; i++) {
            const newPlanet = {};
            const url = planets[i];
            axios
                .get(url)
                .then(function(response) {
                    // handle success
                    newPlanet.name = response.data.name;
                    newPlanet.terrain = response.data.terrain;
                    newPlanet.gravity = response.data.gravity;
                    newPlanet.diameter = response.data.diameter;
                    newPlanet.population = response.data.population;
                    newPlanets.push(newPlanet);
                    movies[indexMovie].planets = newPlanets;
                })
                .catch(function(error) {
                    // handle error
                    console.log(error);
                })
                .then(function() {
                    // always executed
                });
        }
        /*
                                                                for (let i = 0; i < movies[indexMovie].planets.length; i++) {
                                                                    const element = movies[indexMovie].planets[i];
                                                                    console.log("Movie: ", element);
                                                                }*/
    };
    swu.runAPI();
    return swu;
}
module.exports = SWAPIUtils();