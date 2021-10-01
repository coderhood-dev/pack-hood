require('module-alias/register');
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const CONFIG = require('@config');
const HttpErrorHandler = require('./utils/HttpErrorHandler');

// Routers
const { OperatorRouter } = require('./modules/operator');
const { PackageRouter } = require('./modules/package');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/operators', OperatorRouter);
app.use('/packages', PackageRouter);

app.use(HttpErrorHandler);

app.listen(CONFIG.PORT, () =>
  console.log(`Server listening to port ${CONFIG.PORT}`)
);
