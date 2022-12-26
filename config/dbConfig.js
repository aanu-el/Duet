const mongoose = require('mongoose')
const logger = require('../logger/logger')

const MONGODB_URL = process.env.MONGODB_URL

function connectToMongoDb() {
  mongoose.connect(MONGODB_URL)

  mongoose.connection.on("connected", () => {
    logger.info("Connected to MongoDB!")
  })

  mongoose.connection.on("error", (err) => {
    logger.error(`MongoDB connection error: ${err}`)
  })
}

module.exports = {
  connectToMongoDb
}
