const express = require("express")
const userRouter = express.Router()
const UserModel = require("../models/users.model")
const controller = require("../controllers/users.controller")


userRouter.get("/", controller.getAllUsers)
userRouter.get("/:id", controller.getUserById)
userRouter.post("/", controller.addUser)
userRouter.put("/:id", controller.updateUser)
userRouter.delete("/:id", controller.deleteUser)

module.exports = userRouter