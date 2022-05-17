const mongoose = require("mongoose");

const GenreScheme = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("genre", GenreScheme);

