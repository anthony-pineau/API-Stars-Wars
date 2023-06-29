const mongoose = require("mongoose");

const planetsSchema = new mongoose.Schema({
  required: {
    type: Array,
    default: [],
  },
  fields: {
    name: {
      type: String,
      required: true,
    },
    diameter: {
      type: String,
      required: true,
    },
    rotation_period: {
      type: String,
      required: true,
    },
    orbital_period: {
      type: String,
      required: true,
    },
    gravity: {
      type: String,
      required: true,
    },
    population: {
      type: String,
      required: true,
    },
    climate: {
      type: String,
      required: true,
    },
    terrain: {
      type: String,
      required: true,
    },
    surface_water: {
      type: String,
      required: true,
    },
    films: {
      type: String,
      required: true,
    },
    residents: {
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
    default: "resources.planet",
    required: true,
  },
});

module.exports = mongoose.model("Planets", planetsSchema);
