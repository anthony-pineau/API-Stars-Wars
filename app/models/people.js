const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  required: {
    type: Array,
    default: [],
  },
  fields: {
    name: {
      type: String,
      required: true,
    },
    edited: {
      type: String,
      default: Date.now,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    created: {
      type: String,
      default: Date.now,
      required: true,
    },
    skin_color: {
      type: String,
      required: true,
    },
    hair_color: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    eye_color: {
      type: String,
      required: true,
    },
    mass: {
      type: String,
      required: true,
    },
    homeworld: {
      type: Number,
      required: true,
    },
    birth_year: {
      type: String,
      required: true,
    },
  },
  model: {
    type: String,
    default: "resources.people",
    required: true,
  },
});

module.exports = mongoose.model('People', peopleSchema);
