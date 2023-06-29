const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  required: {
    type: Array,
    default: [],
  },
  fields: {
    name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    vehicle_class: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    cost_in_credits: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      required: true,
    },
    crew: {
      type: String,
      required: true,
    },
    passengers: {
      type: String,
      required: true,
    },
    max_atmosphering_speed: {
      type: String,
      required: true,
    },
    cargo_capacity: {
      type: String,
      required: true,
    },
    consumables: {
      type: String,
      required: true,
    },
    films: {
      type: String,
      required: true,
    },
    pilots: {
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
    default: "resources.vehicle",
    required: true,
  },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
