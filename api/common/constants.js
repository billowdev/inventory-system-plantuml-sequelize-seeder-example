require("dotenv").config();

exports.NODE_ENV = process.env.NODE_ENV
exports.DEVELOPMENT = 'development'
exports.PRODUCTION = 'production'
exports.TEST = 'test'

exports.DB_USERNAME = process.env.DB_USERNAME
exports.DB_PASSWORD = process.env.DB_PASSWORD
exports.DB_DATABASE_DEV = process.env.DB_DATABASE_DEV
exports.DB_DATABASE_PROD = process.env.DB_DATABASE_PROD
exports.DB_DATABASE_TEST = process.env.DB_DATABASE_TEST
exports.DB_HOST = process.env.DB_HOST