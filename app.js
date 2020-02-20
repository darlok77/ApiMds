const express = require("express")
const bodyParser = require("body-parser")
const UserController = require("./controllers/UserController")
const ScoreController = require("./controllers/ScoreController")
const EventController = require("./controllers/EventController")

const app = express()
const port = process.env.PORT || 8082

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    // Pass to next layer of middleware
    next()
})

// API ENDPOINTS

app
  .route("/users/show")
  .get(UserController.listAllUsers)
app
  .route("/users/show/:userId")
  .get(UserController.readUser)

app
  .route("/events/show")
  .get(EventController.listAllEvents)
app
  .route("/events/show/:eventId")
  .get(EventController.readEvent)

app
  .route("/score/show")
  .get(ScoreController.listAllUsersScore)
app
  .route("/score/show/:userId")
  .get(ScoreController.readUser)
app
  .route("/score/update/:userId")
  .put(ScoreController.updateUser)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})