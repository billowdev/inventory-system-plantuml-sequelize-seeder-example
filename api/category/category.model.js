const { HasMany } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('./db/database')

module.exports = (sequelize, DataTypes) => {

	const Category = db.define('category', {
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

	Category.associate = models => {
		Category.HasMany(models.Product);
	}
	Category.sync().then(() => {
		console.log('Category table created');
	});

}





