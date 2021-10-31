const {body, validationResult, param} = require('express-validator');

exports.ValidationResult = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const message = result.array()[0].msg;
    const error = result.array()[0].param;

    return res.status(400).json({success: false, message: message, param: error});
  }

  next();
};


exports.authUserValidator = [
  body('access_code').isString().not().isEmpty().withMessage('Access code can not be empty!').isLength({min: 1, max: 20}).withMessage('The name must be have 1 in 20 caracters'),
  body('password').isString().not().isEmpty().withMessage('Password can not be empty!').isLength({min: 8, max: 40}).withMessage('Password must be have minimum 8 caracters'),
];

exports.createUserValidator = [
  body('access_code').isString().not().isEmpty().withMessage('Access code can not be empty!').isLength({min: 1, max: 20}).withMessage('The name must be have 1 in 20 caracters'),
  body('password').isString().not().isEmpty().withMessage('Password can not be empty!').isLength({min: 8, max: 40}).withMessage('Password must be have minimum 8 caracters'),
];

exports.deleteUserValidator = [
  param('_id').isString().not().isEmpty().withMessage('Access code can not be empty!').isMongoId(),
];

exports.updateUserValidator = [
  body('_id').isString().not().isEmpty().withMessage('Access code can not be empty!').isMongoId(),
  body('password').isString().not().isEmpty().withMessage('Password can not be empty!').isLength({min: 8, max: 40}).withMessage('Password must be have minimum 8 caracters'),
];
