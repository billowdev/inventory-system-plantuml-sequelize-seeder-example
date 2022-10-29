require("dotenv").config();
// const config = require("../db/config.js");
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../common/config.js')[env];
const Sequelize = require("sequelize");

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], { ...config, force: false });
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// ------------------------- define model -------------------------
db.Product = require("./product.model")(sequelize, Sequelize);
db.Category = require("./category.model")(sequelize, Sequelize);

module.exports = db