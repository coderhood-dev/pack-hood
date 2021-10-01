class HttpError extends Error {
  constructor(
    status = 500,
    response = { error: true, message: 'Error' },
    ...params
  ) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError);
    }

    this.status = status;
    this.response = response;
    this.date = new Date();
  }
}

module.exports = HttpError;
