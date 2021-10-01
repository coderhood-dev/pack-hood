const OperatorDatabase = require('@database/OperatorDB');

class Operator {
  constructor(name, cellphone, email, password, role) {
    const id = Math.floor(Math.random() * 1000);
    this.id = id;
    this.name = name;
    this.cellphone = cellphone;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  getId = () => this.id;

  getName = () => this.name;

  getCellphone = () => this.cellphone;

  getEmail = () => this.email;

  getPassword = () => this.password;

  getRole = () => this.role;

  setName = (name) => {
    this.name = name;
  };

  setCellphone = (cellphone) => {
    this.cellphone = cellphone;
  };

  setEmail = (email) => {
    this.email = email;
  };

  setPassword = (password) => {
    this.password = password;
  };

  setRole = (role) => {
    this.role = role;
  };

  static findById(id) {
    return OperatorDatabase.getById(id);
  }

  static getAll() {
    return OperatorDatabase.getAll();
  }

  static findByEmail(email) {
    return OperatorDatabase.getAll().find(
      (operator) => operator.email === email
    );
  }

  save = () => {
    const updated = OperatorDatabase.update(this.getId, this);
    if (!updated) {
      return OperatorDatabase.add(this);
    }
    return updated;
  };

  delete = () => OperatorDatabase.remove(this.getId());

  toObject = () => ({
    id: this.getId(),
    name: this.getName(),
    cellphone: this.getCellphone(),
    email: this.getEmail(),
    role: this.getRole(),
  });

  toPrivateObject = () => ({
    id: this.getId(),
    name: this.getName(),
    cellphone: this.getCellphone(),
    email: this.getEmail(),
    role: this.getRole(),
    password: this.getPassword(),
  });
}

module.exports = Operator;
