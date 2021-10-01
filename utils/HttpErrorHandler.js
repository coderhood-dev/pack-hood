const HttpError = require('./HttpError');

const HttpErrorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json(err.response);
  } else {
    // no se atrapo el error!  D:
    console.log(err);
    res.status(500).send('Internal server error');
  }
};

module.exports = HttpErrorHandler;
