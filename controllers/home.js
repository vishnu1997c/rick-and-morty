const axios = require("axios");
const { json } = require("express");
require("dotenv").config();


const getHomePage = async (req, res) => {
    res.render('home', {
      title: 'Search city',
    });
}

const getSearch = async (req, res) => {
    try {
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
            ${req.query.q}?key=${process.env.API_KEY}`);
        const obj = response.data; 

        res.render("search", {
            title: "Weather page",
            obj
        })
    } catch(err) {
        console.log(err);
    }
}

const getWeather = async (req, res) => {
    try {
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
            ${req.query.q}?key=${process.env.API_KEY}`);
        const obj = response.data; 

        res.send(obj)
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    getHomePage,
    getSearch,
    getWeather
}