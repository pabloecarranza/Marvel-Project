const mongoose = require("mongoose");

const PlataformScheme = new mongoose.Schema(
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

module.exports = mongoose.model("plataform", PlataformScheme);

