const Joi = require('joi')

const AddPostSchema = Joi.object({
  title: Joi.string()
    .min(1)
    .max(255)
    .required(),
  image: Joi.dataUri(),
  body: Joi.string()
    .min(1)
    .required(),
  view_count: Joi.number()
     .min(0)
     .required(),
  createdAt: Joi.date()
     .default(Date.now),
  lastUpdated: Joi.date()
     .default(Date.now)
})

const validatePostMW = async (req, res, next) => {
  const postPayLoad = req.body

  try {
    await AddPostSchema.validateAsync(postPayLoad)
    next() 
  } catch (error) {
    next({
      message: error.details[0].message,
      status: 400
    })
  }
}

module.exports = {
  validatePostMW
}