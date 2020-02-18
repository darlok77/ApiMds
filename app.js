const express = require("express")
const bodyParser = require("body-parser")
const UserController = require("./controllers/UserController")

const app = express()
const port = process.env.PORT || 8082

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// API ENDPOINTS

app
  .route("/users/show")
  .get(UserController.listAllUsers)
app
  .route("/users/create")
  .post(UserController.createNewUser)
app
  .route("/users/show/:userId")
  .get(UserController.readUser)
app
  .route("/users/update/:userId")
  .put(UserController.updateUser)
app
  .route("/users/delete/:userId")
  .delete(UserController.deleteUser)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})