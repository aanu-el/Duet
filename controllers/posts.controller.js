const PostModel = require("../models/posts.model")

const getAllPosts = async (req, res, next) => {
  await PostModel.find({})
    .then((post) => {
      res.status(200).json(post)
    })
    .catch((err) => {
      next({
        message: err.message,
        status: 500
      })
    })
}

const getPostById = async (req, res, next) => {
  const id = req.params.id
  await PostModel.findById(id)
    .then((post) => {
      res.status(200).json(post)
    })
    .catch((err) => {
      next({
        message: err.message,
        status: 500
      })
    })
}

const addPost = async (req, res, next) => {
  const newPost = req.body
  newPost.lastUpdateAt = new Date()
  await PostModel.create(newPost)
    .then((post) => {
      res.status(200).json(post)
    })
    .catch((err) => {
      next({
        message: err.message,
        status: 500
      })
    })
}

const updatePost = async (req, res, next) => {
  const id = req.params.id
  const newDetails = req.body
  newDetails.lastUpdateAt = new Date()
  await PostModel.findByIdAndUpdate(id, newDetails, {new: true})
    .then((post) => {
      res.status(200).json(post)
    })
    .catch((err) => {
      next({
        message: err.message,
        status: 500
      })
    })
}

const deletePost = async (req, res, next) => {
  const id = req.params.id
  await PostModel.findByIdAndRemove(id)
    .then((post) => {
      res.status(200).json(post)
    })
    .catch((err) => {
      next({
        message: err.message,
        status: 500
      })
    })
}

module.exports = {
  getAllPosts, getPostById, addPost, updatePost, deletePost
}