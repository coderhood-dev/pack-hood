const SIZES = [
  {
    id: 1,
    description: 'Chico',
  },
  {
    id: 2,
    description: 'Mediano',
  },
  {
    id: 3,
    description: 'Grande',
  },
];

const SIZE = {
  SMALL: SIZES[0],
  REGULAR: SIZES[1],
  BIG: SIZES[2],
};

class Sizes {
  constructor(sizes) {
    this.sizes = sizes;
  }

  getAll() {
    return this.sizes;
  }

  isValid(id) {
    return this.sizes.some((role) => role.id === id);
  }

  getById(id) {
    return this.sizes.find((role) => role.id === id);
  }
}

const Size = new Sizes(SIZES);

module.exports = { Size, SIZE };
