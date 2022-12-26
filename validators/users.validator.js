const Joi = require('joi')

const AddUserSchema = Joi.object({
  name: Joi.string()
    .required()
    .min(1)
    .max(20)
    .trim(),
  phoneNumber: Joi.string()
    .min(11)
    .optional()
    .trim(),
  email: Joi.string()
    .email()
    .required()
    .trim(),
    password: Joi.string()
     .min(6)
     .required()
     .trim(),
  role: Joi.string()
    .valid('user', 'admin')
    .default('user'),
  createdAt: Joi.date()
    .default(Date.now),
  lastUpdated: Joi.date()
    .default(Date.now)
})

const validateUserMW = async (req, res, next) => {
  const userPayLoad = req.body
  try {
    await AddUserSchema.validateAsync(userPayLoad)
    next()
  } catch (error) {
    next({
      message: error.details[0].message,
      status: 400
    })
  }
}

module.exports = {
  validateUserMW
}