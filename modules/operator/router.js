const operatorRouter = require('express').Router();
const validateOperator = require('@middleware/validateOperator');
const operatorController = require('./controller');

operatorRouter.get('/', validateOperator(2), operatorController.getAll);
operatorRouter.get('/:id', operatorController.getById);
operatorRouter.post('/', operatorController.create);
operatorRouter.put('/:id', operatorController.updateById);
operatorRouter.delete(
  '/:id',
  validateOperator(2),
  operatorController.deleteById
);
operatorRouter.post('/auth/login', operatorController.login);

module.exports = operatorRouter;
