const PackageDatabase = require('@database/PackageDB');

class Package {
  constructor(
    content,
    address,
    size,
    status,
    recipientName,
    recipientPhone,
    id
  ) {
    const generatedId = Math.floor(Math.random() * 1000000000);
    this.id = id || generatedId;
    this.content = content;
    this.address = address;
    this.size = size;
    this.status = status;
    this.recipientName = recipientName;
    this.recipientPhone = recipientPhone;
  }

  getId = () => this.id;

  getContent = () => this.content;

  getAddress = () => this.address;

  getSize = () => this.size;

  getStatus = () => this.status;

  getRecipientName = () => this.recipientName;

  getRecipientPhone = () => this.recipientPhone;

  setContent = (content) => {
    this.content = content;
  };

  setAddress = (address) => {
    this.address = address;
  };

  setSize = (size) => {
    this.size = size;
  };

  setStatus = (status) => {
    this.status = status;
  };

  setRecipientName = (recipientName) => {
    this.recipientName = recipientName;
  };

  setRecipientPhone = (recipientPhone) => {
    this.recipientPhone = recipientPhone;
  };

  static findById(id) {
    const foundedPackage = PackageDatabase.getById(id);
    if (!foundedPackage) return null;
    return new Package(
      foundedPackage.content,
      foundedPackage.address,
      foundedPackage.size,
      foundedPackage.status,
      foundedPackage.recipientName,
      foundedPackage.recipientPhone,
      foundedPackage.id
    );
  }

  static getAll() {
    return PackageDatabase.getAll();
  }

  save = () => {
    const updated = PackageDatabase.update(this.getId, this);
    if (!updated) {
      return PackageDatabase.add(this);
    }
    return updated;
  };

  delete = () => PackageDatabase.remove(this.getId());

  toObject = () => ({
    id: this.getId(),
    content: this.getContent(),
    address: this.getAddress(),
    size: this.getSize(),
    status: this.getStatus(),
    recipientName: this.getRecipientName(),
    recipientPhone: this.getRecipientPhone(),
  });
}

module.exports = Package;
