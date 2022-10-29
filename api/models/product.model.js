module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define("product", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		desc: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		brand: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'product',
		timestamps: false,
		freezeTableName: true
	});

	// Product.associate = (models) => {
	// 	Product.belongsTo(models.Category);
	// }

	return Product;
};

