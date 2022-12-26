const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()
const connectToMongoDb = require("./config/dbConfig")
const httpLogger = require("./logger/httpLogger")
const logger = require("./logger/logger")

const PORT = process.env.PORT
const app = express()
connectToMongoDb()

// ==> Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(httpLogger)

// ==> Routes 
app.get("/api/v1/", (req, res) => {
  res.end("Home Page")
})

// ==> Error Handler
app.use((err, req, res, next) => {
  logger.error(err.message)
  const errorStatus = err.status || 500
  res.status(errorStatus).send(err.message)
})

// ==> Server Configuration
app.listen(PORT, () => {
  logger.info(`App started on PORT: ${PORT}`)
})