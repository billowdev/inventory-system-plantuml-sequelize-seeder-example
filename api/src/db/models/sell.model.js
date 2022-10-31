module.exports = (sequelize, DataTypes) => {
	const Sell = sequelize.define("Sell", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		qty : {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		orderId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'order_id',
			allowNull: false,
		},
		employeeId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'employee_id',
			allowNull: false,
		},
		productId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'product_id',
			allowNull: false,
		},
	}, {
		tableName: 'sell',
		timestamps: true,
		underscored: true,
		freezeTableName: true
	});

	Sell.associate = (models) => {
		Sell.belongsTo(models.Order, {
			foreignKey: 'order_id',
			onDelete: 'casCade'
		});
		Sell.belongsTo(models.Employee, {
			foreignKey: 'employee_id',
			onDelete: 'NO ACTION'
		});
		Sell.belongsTo(models.Product, {
			foreignKey: 'product_id',
			onDelete: 'NO ACTION'
		});
		// Sell.belongsTo(models.Receipt, {
		// 	foreignKey: 'receipt_id',
		// 	onDelete: 'NO ACTION'
		// });
	}

	return Sell;
};

