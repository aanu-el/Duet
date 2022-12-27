const UserModel = require('../models/users.model')

const getAllUsers = async (req, res, next) => {
  await UserModel.find({})
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((err) => {
      next({
        message: err.message,
        status: 500
      })
    })
}

const getUserById = async (req, res, next) => {
  const id = req.params.id
  await UserModel.findById(id)
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((err) => {
      next({
        message: err.message,
        status: 500
      })
    })
}

const addUser = async (req, res, next) => {
  const newUser = req.body
  newUser.lastUpdateAt = new Date()
  await UserModel.create(newUser)
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((err) => {
      next({
        message: err.message,
        status: 500
      })
    })
}

const updateUser = async (req, res, next) => {
  const id = req.params.id
  const newDetails = req.body
  newDetails.lastUpdateAt = new Date()
  await UserModel.findByIdAndUpdate(id, newDetails, { new: true })
   .then((user) => {
      res.status(200).json(user)
    })
    .catch((err) => {
      next({
        message: err.message,
        status: 500
      })
    })
}

const deleteUser = async (req, res, next) => {
  const id = req.params.id
    await UserModel.findByIdAndRemove(id)
     .then((user) => {
        res.status(200).json(user)
      })
     .catch((err) => {
        next({
          message: err.message,
          status: 500
        })
      })
}

module.exports = {
  getAllUsers, getUserById, addUser, updateUser, deleteUser
}