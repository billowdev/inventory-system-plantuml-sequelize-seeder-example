const Sequelize = require('sequelize');
const db = require('./db/database')

const Product = db.define('products', {
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

Product.sync().then(() => {
	console.log('Product table created');
});
module.exports = Product;

