const app = require('./app.js')
const db = require('./db')

const PORT = process.envPORT || 3000

db.on('error', console.error.bind(console, 'MongoDb connection error:'))

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))