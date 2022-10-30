// const Sequelize = require('sequelize');
// const path = require('path');
// const basename = path.basename(__filename);

// const { DEVELOPMENT, PRODUCTION, NODE_ENV } = require('../common/constants')
// const { config } = require('./db.config')

// let dbConfig;
// if (NODE_ENV == DEVELOPMENT) {
// 	dbConfig = config.development
// } else if (NODE_ENV == PRODUCTION) {
// 	dbConfig = config.production
// } else {
// 	dbConfig = config.test
// }

// const db = new Sequelize(
// 	dbConfig.database, dbConfig.username, dbConfig.password, {
// 	host: dbConfig.host,
// 	dialect: 'postgres',
// 	operatorsAliases: 0,
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		acquire: 30000,
// 		idle: 10000
// 	},
// });
// module.exports = db