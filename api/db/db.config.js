'use strict';
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE_DEV, DB_DATABASE_PROD, DB_DATABASE_TEST, DB_HOST } = require('../common/constants')

exports.config = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE_DEV,
    host: DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE_TEST,
    host: DB_HOST,
    dialect: 'postgres'
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE_PROD,
    host: DB_HOST,
    dialect: 'postgres'
  },
};


