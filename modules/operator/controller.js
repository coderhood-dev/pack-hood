const operatorService = require('./service');

class OperatorController {
  async create(req, res, next) {
    res.status(200).json(await operatorService.create(req.body));
  }

  async getAll(req, res, next) {
    res.status(200).json(await operatorService.getAll());
  }

  async getById(req, res, next) {
    res.status(200).json(await operatorService.getById(req.params.id));
  }

  async updateById(req, res, next) {
    res
      .status(202)
      .json(await operatorService.updateById(req.params.id, req.body));
  }

  async deleteById(req, res, next) {
    res.status(202).json(await operatorService.deleteById(req.params.id));
  }

  async login(req, res, next) {
    res.status(200).json(await operatorService.login(req.body));
  }
}

module.exports = new OperatorController();
