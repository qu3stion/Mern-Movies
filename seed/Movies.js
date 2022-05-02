const db = require('../db')
const Movie = require ('../models/movie')

db.on('error', console.error.bind(console, 'MongpDb connection error:'))

const main = async () => {
    const movies = [
        { title: 'Pulp fiction', director: 'Quentin Tarantino', year: '1994' },
        { title: 'The Lion King', director: 'Roger Allers' ,year:'1994' },
        { title: 'Akira', director: 'Katsuhiro Otomo', year: '1988' },
        { title: 'Pleaceholder', director: 'placeholder' },
    ]

    await Movie.insertMany(movies)
    console.log("Created some movies!")
}
    const run = async () => {
        await main()
        db.close()
      }
      run()
      
