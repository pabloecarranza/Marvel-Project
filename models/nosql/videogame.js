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

/* const a = {
  "name": "Elden Ring",
  "released": "2020-04-12",
  "background_image": "https://www.google.com.ar/jkasdhjklasdhfjkd.jpg",
  "rating": 2,
  "rating_top": 4,
  "ratings_count": 9,
  "metacritic": 2,
  "esrb_rating": "violence 12+",
}
 */