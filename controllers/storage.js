const { genreModel, plataformModel, videogameModel } = require("../models");


const getItems = async (req, res) => {

    res.send({data:11})
};
const getItem = (req, res) => {};

//http://localhost:3000/api/storage
const createItem = async (req, res) => {
  
  res.send({data:11})
};

const updateItem = (req, res) => {};
const deleteItem = (req, res) => {};

module.exports = { getItem, getItems, createItem, updateItem, deleteItem };
