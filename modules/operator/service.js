const { Roles } = require('@modules/enums');
const HttpError = require('@utils/HttpError');
const jwt = require('jsonwebtoken');
const CONFIG = require('@config/index');
const Operator = require('./Operator');

class OperatorService {
  async create(body) {
    const { name, password, cellphone, email, role } = body;
    if (!name || !password || !cellphone || !email || !role)
      throw new HttpError(400, { error: true, message: 'Missing fields' });
    if (!Roles.isValidRole(role))
      throw new HttpError(400, { error: true, message: 'Invalid role' });
    const operatorFounded = await Operator.findByEmail(email);
    if (operatorFounded)
      throw new HttpError(400, {
        error: true,
        message: 'Email already exists',
      });
    const operator = new Operator(name, cellphone, email, password, role);
    operator.save();
    return operator.toObject();
  }

  async getAll() {
    const operators = await Operator.getAll({});
    return operators;
  }

  async getById(id) {
    const operatorFounded = await Operator.findById(id);
    if (!operatorFounded)
      throw new HttpError(404, { error: true, message: 'Operator not found' });
    operatorFounded.password = undefined;
    return operatorFounded;
  }

  async deleteById(id) {
    const operatorFounded = await Operator.findById(id);
    if (!operatorFounded)
      throw new HttpError(404, { error: true, message: 'Operator not found' });
    await operatorFounded.delete();
    return { message: 'Operador eliminado' };
  }

  async updateById(id, body) {
    const operatorFounded = await Operator.findById(id);
    if (!operatorFounded)
      throw new HttpError(404, { error: true, message: 'Operator not found' });
    const { name, password, cellphone, email } = body;
    if (name) operatorFounded.setName(name);
    if (password) operatorFounded.setPassword(password);
    if (cellphone) operatorFounded.setCellphone(cellphone);
    if (email) operatorFounded.setEmail(email);
    await operatorFounded.save();
    return operatorFounded.toObject();
  }

  async login(body) {
    const { email, password } = body;
    if (!email || !password)
      throw new HttpError(400, {
        error: true,
        message: 'Missing fields',
      });
    const operatorFounded = await Operator.findByEmail(email);
    if (!operatorFounded || operatorFounded.password !== password)
      throw new HttpError(400, {
        error: true,
        message: 'Usuario o contrasenia invalidos',
      });
    operatorFounded.token = jwt.sign(
      { id: operatorFounded.id, role: operatorFounded.role },
      CONFIG.JWT_SECRET,
      {
        expiresIn: 1440,
      }
    );
    return operatorFounded;
  }
}

module.exports = new OperatorService();
