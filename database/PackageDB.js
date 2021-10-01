const FileReader = require('@utils/FileReader');

const STORAGE_PATH = `${__dirname}/storage/packages.json`;

class PackageDataBase {
  constructor() {
    this.reader = new FileReader(STORAGE_PATH, 'utf-8', []);
  }

  getAll() {
    return this.reader.read();
  }

  getById(id) {
    return this.getAll().find((pkg) => pkg.id === parseInt(id, 10));
  }

  add(pkg) {
    const db = this.getAll();
    db.push(pkg.toObject());
    this.reader.write(db);
    return pkg;
  }

  remove(id) {
    const db = this.getAll();
    const index = db.findIndex((pkg) => pkg.id === parseInt(id, 10));
    if (index === -1) {
      return false;
    }
    db.splice(index, 1);
    this.reader.write(db);
    return true;
  }

  update(id, pkg) {
    const db = this.getAll();
    const index = db.findIndex((op) => op.id === id);
    if (index === -1) {
      return false;
    }
    db[index] = pkg.toObject();
    this.reader.write(db);
    return db[index];
  }
}

const PackageDatabaseInstance = new PackageDataBase();

module.exports = PackageDatabaseInstance;
