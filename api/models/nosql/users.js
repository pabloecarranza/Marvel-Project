const mongoose = require("mongoose");
const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    released: {
      type: String,
    },
    background_image: {
      type: String,
    },
    rating: {
      type: Number,
    },
    rating_top: {
      type: Number,
    },
    ratings_count: {
      type: Number,
    },
    metacritic: {
      type: Number,
    },
    esrb_rating: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("videogame", UserScheme);
