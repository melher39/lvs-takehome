// file where our API calls to the SWAPI will be made
// dependencies
// we can use axios for our api requests
const axios = require("axios");

// Define methods for the charactersController.js and export them to be used elsewhere
module.exports = {
    // find all characters
    // rundown: make a request to SWAPI, then retrieve the data and return it as json 
    findAll: function (req, res) {
        // initial url to begin the search with
        let url = "https://swapi.co/api/people/";
        // empty array to store the names of the characters
        let allCharacterNames = [];

        // function where the axios get request will be made
        const loopAllPages = () => axios.get(url)
            .then(
                response => {
                    // make the results info we want easier to access by storing it in a variable
                    const characterResults = response.data.results;
                    // since all we need for this API call are the character names, we will filter them out here
                    characterResults.map(eachCharacter => {
                        // add these results to our allCharacters array
                        allCharacterNames.push(eachCharacter.name);
                    });
                    // since the SWAPI has several pages of information for the characters, we need to loop through all of them
                    // if the value of response.data.next is not null, the value should be a link to the next page of info
                    // while this is true, use this value as the link for our API call
                    while (response.data.next !== null) {
                        url = response.data.next;
                        // using recursion, we will run this same function until the condition is no longer met
                        return loopAllPages();
                    }
                    // display the accumulated results in a json format
                    res.json(allCharacterNames);
                })
            // if we encounter error 422 (Unprocessable Entity), catch it and return it to us
            .catch(err => res.status(422).json(err));

        // start by grabbing the first api results page
        loopAllPages();
    },

    // find one specific character by name and retrieve data and return it as json 
    findOne: function (req, res) {
        axios.get("https://swapi.co/api/people/", { params: { search: req.params.name } })
            .then(
                ({ data: { results } }) => res.json(results)
            )
            .catch(err => res.status(422).json(err));
    }

};