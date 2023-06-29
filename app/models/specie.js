const mongoose = require("mongoose");

const speciesSchema = new mongoose.Schema({
  required: {
    type: Array,
    default: [],
  },
  fields: {
    name: {
      type: String,
      required: true,
    },
    classification: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    average_height: {
      type: String,
      required: true,
    },
    average_lifespan: {
      type: String,
      required: true,
    },
    hair_colors: {
      type: String,
      required: true,
    },
    skin_colors: {
      type: String,
      required: true,
    },
    eye_colors: {
      type: String,
      required: true,
    },
    homeworld: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    people: {
      type: String,
      required: true,
    },
    films: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      format: String,
      required: true,
    },
    created: {
      type: String,
      format: String,
      default: Date.now,
      required: true,
    },
    edited: {
      type: String,
      format: String,
      default: Date.now,
      required: true,
    },
  },
  model: {
    type: String,
    default: "resources.species",
    required: true,
  },
});

module.exports = mongoose.model("Species", speciesSchema);