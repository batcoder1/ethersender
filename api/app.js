const session = require('express-session')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const server = require('http').Server(app)

// Add helmet package in order to secure express
const helmet = require('helmet')


 
// Add cors middleware in order to allow just the origin domain
// for security reasons
const whitelist = [ 'http://localhost', 'http://localhost:4200' ]

// Add cors middleware in order to allow just the origin domain
// for security reasons
app.use(cors({
  origin: whitelist
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}))

// parse application/json
app.use(bodyParser.json())

// Limit maximum size of payload for HTTP body in body in express
app.use(bodyParser.json({
  limit: '2mb'
}))
// Add helmet middleware for securing HTTP response
app.use(helmet())

// Enable trust proxy in order to get real client IP address instead of
// nginx reverse proxy IP address. This is useful for security in blacklist
// of IP addresses
app.set('trust proxy', 2)

 

// define routes
const router = express.Router()
require('./routes/index.js')(router)

router.route('/').get(function (req, res, next) {
  res.json({
    'message': 'Blockchain REST API'
  })
})

app.use('/api/v1', router)

 

// listen for requests
server.listen(3000, '0.0.0.0', function () {
  console.log(new Date())
  console.log(`Connected to localhost on port 3000`)
})
