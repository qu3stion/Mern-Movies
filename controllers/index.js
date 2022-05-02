const Movie = require('../models/Movie')

const createMovie = async (req, res) => {
  try {
    const movie = await new Movie(req.body)
    await Movie.save()
    return res.status(201).json({
      movie,
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
}
}

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
    return res.status(200).json({movies})
  } catch (error) {
    return res.status(500).send(error.messsage)
}
}

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id)
    if (movie) {
      return res.status(200).json({ Movie });
}
  return res.status(404).send('movie with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message);
}}

const updateMovie = (req, res) => {
  try {
    const { id } = req.params;
    Movie.findByIdAndUpdate(
      id, req.body, { new: true }, (err, movie) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!movie) {
          res.status(500).send('movie not found');
        }
        return res.status(200).json(movie);
      }
    )  
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
   const deleted = await Movie.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Movie deleted');
    }
    throw new Error("Movie not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie
}