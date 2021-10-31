require('dotenv').config();

const {Router} = require('express');
const {ensureAuthenticated} = require('../middlewares/ensureAuthenticated');
const {AuthenticateUserController} = require('../modules/users/controllers/AuthenticateUserController');
const {CreateUserController} = require('../modules/users/controllers/CreateUserController');
const {DeleteUserController} = require('../modules/users/controllers/DeleteUserController');
const {UpdateUserController} = require('../modules/users/controllers/UpdateUserController');
const {ValidationResult, createUserValidator, deleteUserValidator, updateUserValidator} = require('../modules/users/validators/userValidator');
const {invoiceGenerator} = require('../utils/StarkBank/InvoiceGenerator');

const userRoutes = Router();

userRoutes.post('/create', createUserValidator, ValidationResult, CreateUserController);
userRoutes.post('/auth', createUserValidator, ValidationResult, AuthenticateUserController);
userRoutes.delete('/delete/:_id', deleteUserValidator, ValidationResult, ensureAuthenticated, DeleteUserController);
userRoutes.put('/update', updateUserValidator, ValidationResult, ensureAuthenticated, UpdateUserController);

userRoutes.post('/generate-invoices', ensureAuthenticated, (request, response) => {
  let interval24Hours = 0;
  const interval = setInterval(() => {
    interval24Hours = interval24Hours + 1;

    if (interval24Hours >= 8) {
      console.log('Request finished.');
      clearInterval(interval);
    }

    for (let index = 0; index <= 11; index++) {
      invoiceGenerator();
    }
  }, 10800000);

  return response.status(200).json({message: `The events will be returned in the webhook with the following api: ${process.env.WEBHOOK_URL}`});
});


module.exports = {userRoutes};
