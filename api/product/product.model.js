const { HasMany } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('./db/database')

module.exports = (sequelize, DataTypes) => {

	const Product = db.define('product', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		name: {
			type: Sequelize.STRING(100),
			allowNull: true
		}
	})

	Product.associate = models => {
		Product.belongsTo(models.Category);
	}
	Product.sync().then(() => {
		console.log('Category table created');
	});

}





