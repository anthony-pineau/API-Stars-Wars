const mongoose = require("mongoose");

const filmsSchema = new mongoose.Schema({
  required: {
    type: Array,
    default: [],
  },
  fields: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    properties: {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      episode_id: {
        type: String,
      },
      opening_crawl: {
        type: String,
      },
      director: {
        type: String,
      },
      producer: {
        type: String,
      },
      release_date: {
        type: String,
      },
      characters: {
        type: Array,
      },
      planets: {
        type: Array,
      },
      starships: {
        type: Array,
      },
      vehicles: {
        type: Array,
      },
      species: {
        type: Array,
      },
      url: {
        type: String,
      },
      created: {
        type: Date,
        default: Date.now,
        required: true,
      },
      edited: {
        type: Date,
        default: Date.now,
        required: true,
      },
    },
  },
  model: {
    type: String,
    default: "resources.film",
    required: true,
  },
});

module.exports = mongoose.model("Films", filmsSchema);
