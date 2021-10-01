const packageService = require('./service');

class PackageController {
  async create(req, res, next) {
    res.status(200).json(await packageService.create(req.body));
  }

  async getAll(req, res, next) {
    res.status(200).json(await packageService.getAll());
  }

  async getById(req, res, next) {
    res.status(200).json(await packageService.getById(req.params.id));
  }

  async updateById(req, res, next) {
    res
      .status(202)
      .json(await packageService.updateById(req.params.id, req.body));
  }

  async deleteById(req, res, next) {
    res.status(202).json(await packageService.deleteById(req.params.id));
  }

  async deliver(req, res, next) {
    res.status(202).json(await packageService.deliver(req.params.id));
  }

  async getStatuses(req, res, next) {
    res.status(200).json(await packageService.statuses());
  }

  async getSizes(req, res, next) {
    res.status(200).json(await packageService.sizes());
  }
}

module.exports = new PackageController();
