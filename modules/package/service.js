const { Size, Status, STATUS } = require('@modules/enums');
const HttpError = require('@utils/HttpError');
const Package = require('./Package');

class OperatorService {
  async create(body) {
    const {
      content,
      address,
      size,
      status,
      recipientName,
      recipientPhone,
    } = body;
    if (
      !content ||
      !address ||
      !size ||
      !status ||
      !recipientName ||
      !recipientPhone
    )
      throw new HttpError(400, 'Missing fields');
    if (!Size.isValid(size) || !Status.isValid(status))
      throw new HttpError(400, 'Invalid size or status');
    const pkg = new Package(
      content,
      address,
      size,
      status,
      recipientName,
      recipientPhone
    );
    pkg.save();
    return pkg.toObject();
  }

  async getAll() {
    return Package.getAll();
  }

  async getById(id) {
    const packageFounded = await Package.findById(id);
    if (!packageFounded) throw new HttpError(404, 'Package not found');
    return packageFounded.toObject();
  }

  async deleteById(id) {
    const packageFounded = await Package.findById(id);
    if (!packageFounded) throw new HttpError(404, 'Package not found');
    await packageFounded.delete();
    return { error: false, message: 'Paquete eliminado' };
  }

  async updateById(id, body) {
    const packageFounded = await Package.findById(id);
    if (!packageFounded) throw new HttpError(404, 'Package not found');
    const {
      content,
      address,
      size,
      status,
      recipientName,
      recipientPhone,
    } = body;
    if (content) packageFounded.setContent(content);
    if (address) packageFounded.setAddress(address);
    if (size && Size.isValid(size)) packageFounded.setSize(size);
    if (status && Status.isValid(status)) packageFounded.setStatus(status);
    if (recipientName) packageFounded.setRecipientName(recipientName);
    if (recipientPhone) packageFounded.setRecipientPhone(recipientPhone);
    await packageFounded.save();
    return packageFounded.toObject();
  }

  async deliver(id) {
    const packageFounded = await Package.findById(id);
    if (!packageFounded) throw new HttpError(404, 'Package not found');
    packageFounded.setStatus(STATUS.DELIVERED.id);
    await packageFounded.save();
    return packageFounded.toObject();
  }

  async statuses() {
    return Status.getAll();
  }

  async sizes() {
    return Size.getAll();
  }
}

module.exports = new OperatorService();
