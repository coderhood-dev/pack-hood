const packageRouter = require('express').Router();
const validateOperator = require('@middleware/validateOperator');
const packageController = require('./controller');

packageRouter.post('/', validateOperator([1, 2]), packageController.create);
packageRouter.put(
  '/:id',
  validateOperator([1, 2]),
  packageController.updateById
);
packageRouter.delete(
  '/:id',
  validateOperator([1, 2]),
  packageController.deleteById
);
packageRouter.post(
  '/deliver',
  validateOperator([1, 2]),
  packageController.deliver
);
packageRouter.get('/statuses', packageController.getStatuses);
packageRouter.get('/sizes', packageController.getSizes);
packageRouter.get('/:id', validateOperator([1, 2]), packageController.getById);
packageRouter.get('/', validateOperator([1, 2]), packageController.getAll);

module.exports = packageRouter;
