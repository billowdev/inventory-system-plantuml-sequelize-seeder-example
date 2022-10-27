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
			allowNull: false
		},
		desc: {
			type: Sequelize.STRING(200),
			allowNull: true
		},
		brand: {
			type: Sequelize.STRING(50),
			allowNull: false
		}
	})

	Product.associate = models => {
		Product.belongsTo(models.Category);
	}
	Product.sync().then(() => {
		console.log('Category table created');
	});

}





