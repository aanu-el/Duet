const express = require("express")
const userRouter = express.Router()
const UserModel = require("../models/users.model")


userRouter.get("/", (req, res) => {
  res.end("Users Route")
})

module.exports = userRouter