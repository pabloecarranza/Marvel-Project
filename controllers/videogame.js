const { genreModel, plataformModel, videogameModel } = require("../models");



//http://localhost:3000/api/videogame
const getItems = async (req, res) => {
    const data = await videogameModel.find({});
    res.send({data});
};
const getItem = (req, res) => {};

/* 
example object to create
{
    "name": "Elden Ring",
    "released": "2020-04-12",
    "background_image": "https://www.google.com.ar/jkasdhjklasdhfjkd.jpg",
    "rating": 2,
    "rating_top": 4,
    "ratings_count": 9,
    "metacritic": 2,
    "esrb_rating": "violence 12+"
  }

*/
//http://localhost:3000/api/videogame
const createItem = async (req, res) => {
  const { body } = req
 const data = await videogameModel.create(body)
  res.send({data})
};
const updateItem = (req, res) => {};
const deleteItem = (req, res) => {};

module.exports = { getItem, getItems, createItem, updateItem, deleteItem };
