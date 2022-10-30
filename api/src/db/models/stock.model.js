
module.exports = (sequelize, DataTypes) => {
	const Stock = sequelize.define("Stock", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		qty: {
			type: DataTypes.INTEGER(),
			defaultValue: 0
		},

		productId: {
			type: DataTypes.INTEGER,
			field: 'product_id',
			foreignKey: true
		},

	}, {
		tableName: 'stock',
		timestamps: true,
		underscored: true,
		freezeTableName: true
	});

	Stock.associate = (models) => {
		Stock.belongsTo(models.Product, {
			foreignKey: 'product_id',
			onDelete: 'casCade'
		});

	}

	return Stock;
};

