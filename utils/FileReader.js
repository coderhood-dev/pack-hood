const fs = require('fs');

class FileReader {
  constructor(path, encoding, defaultData) {
    this.path = path;
    this.encoding = encoding;
    this.defaultData = defaultData;
  }

  read() {
    let data;
    try {
      data = JSON.parse(fs.readFileSync(this.path, this.encoding));
    } catch (error) {
      console.log(`File ${this.path}  not found, creating one`);
      fs.writeFileSync(this.path, JSON.stringify(this.defaultData));
      data = this.defaultData;
    }
    return data;
  }

  write(data) {
    fs.writeFileSync(this.path, JSON.stringify(data, null, 2));
  }
}

module.exports = FileReader;
