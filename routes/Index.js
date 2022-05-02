const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is the root!'))
router.post('/movies', controllers.createMovie)
router.get('/movies', controllers.getAllMovies)
router.get('/movies/:id', controllers.getMovieById)
router.put('/movies/:id', controllers.updateMovie)
router.delete('/movies/:id', controllers.deleteMovie)

module.exports = router;