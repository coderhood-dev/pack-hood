const STATUSES = [
  {
    id: 1,
    description: 'En deposito',
  },
  {
    id: 2,
    description: 'En viaje',
  },
  {
    id: 3,
    description: 'Entregado',
  },
  {
    id: 3,
    description: 'Cancelado',
  },
];

const STATUS = {
  ON_DEPOSIT: STATUSES[0],
  ON_TRAVEL: STATUSES[1],
  DELIVERED: STATUSES[2],
  CANCELLED: STATUSES[3],
};

class Statuses {
  constructor(statuses) {
    this.statuses = statuses;
  }

  getAll() {
    return this.statuses;
  }

  isValid(id) {
    return this.statuses.some((role) => role.id === id);
  }

  getById(id) {
    return this.statuses.find((role) => role.id === id);
  }
}

const Status = new Statuses(STATUSES);

module.exports = { Status, STATUS };
