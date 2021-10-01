const HttpError = require('@utils/HttpError');
const jwt = require('jsonwebtoken');
const CONFIG = require('@config');

const validateOperator = (roles) => {
  const isRoleAllowed = (id) => {
    if (Array.isArray(roles)) {
      if (roles.some((idd) => idd === parseInt(id, 10))) return true;
    }
    if (id === roles) return true;
    return false;
  };

  return (req, res, next) => {
    const token = req.headers.authorization?.split('Bearer ')[1];
    jwt.verify(token, CONFIG.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw new HttpError(400, { error: true, message: 'Token inválida' });
      }
      if (!isRoleAllowed(decoded.role)) {
        throw new HttpError(400, {
          error: true,
          message: 'No tienes permisos',
        });
      }
      req.decoded = decoded;
      next();
      return true;
    });
  };
};

module.exports = validateOperator;
