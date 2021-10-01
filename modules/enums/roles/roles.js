const ROLES = [
  {
    id: 1,
    description: 'Operador',
  },
  {
    id: 2,
    description: 'Operador Administrador',
  },
];

class Roles {
  constructor(roles) {
    this.roles = roles;
  }

  getRoles() {
    return this.roles;
  }

  isValidRole(id) {
    return this.roles.some((role) => role.id === id);
  }

  getRoleById(id) {
    return this.roles.find((role) => role.id === id);
  }
}

const roles = new Roles(ROLES);

module.exports = roles;
