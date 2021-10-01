const FileReader = require('@utils/FileReader');

const STORAGE_PATH = `${__dirname}/storage/operators.json`;

class OperatorDataBase {
  constructor() {
    this.reader = new FileReader(STORAGE_PATH, 'utf-8', []);
  }

  getAll() {
    return this.reader.read();
  }

  getById(id) {
    return this.getAll().find((operator) => operator.id === parseInt(id, 10));
  }

  add(operator) {
    const db = this.getAll();
    db.push(operator.toPrivateObject());
    this.reader.write(db);
    return operator;
  }

  remove(id) {
    const db = this.getAll();
    const index = db.findIndex((operator) => operator.id === parseInt(id, 10));
    if (index === -1) {
      return false;
    }
    db.splice(index, 1);
    this.reader.write(db);
    return true;
  }

  update(id, operator) {
    const db = this.getAll();
    const index = db.findIndex((op) => op.id === id);
    if (index === -1) {
      return false;
    }
    db[index] = operator.toPrivateObject();
    this.reader.write(db);
    return db[index];
  }
}

const OperatorDbInstance = new OperatorDataBase();

module.exports = OperatorDbInstance;
