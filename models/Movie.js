const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Movie = new Schema(
  {
    title: { type: String, required: true },
    director:{type: String, required: true},
    actors: {type: [String] , required: true},
    year: {type: String, required: true},
    duration: {type: String, required: true}

  },
  {timestamps: true}
)

module.exports = mongoose.model('movies', Movie)