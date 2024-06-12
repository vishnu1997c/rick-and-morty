const axios = require("axios");
require("dotenv").config();


const getHomePage = async (req, res) => {
    res.render('home', {
      title: 'Search city',
    });
}

const getCharacter = async (req, res) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${req.query.page}`);
        const obj = response.data; 
        console.log(obj)

        res.render("home", {
            title: "Rick and Morty Characters",
            obj
        })
    } catch(err) {
        console.log(err);
    }
}

const singleCharacter = async (req, res) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${req.query.characterId}`);
        const obj = response.data; 
        console.log(obj)

        res.render("character", {
            title: "Rick and Morty Characters",
            obj
        })
    } catch(err) {
        console.log(err);
    }
}

const search = async (req,res) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${req.query.q}`);

        res.json(response.data.results)
    } catch(err) {
        console.log(err);
    }
}


module.exports = {
    getCharacter,
    singleCharacter,
    search
}