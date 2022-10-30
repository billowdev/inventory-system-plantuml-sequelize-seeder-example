module.exports = (sequelize, DataTypes) => {
	const Order = sequelize.define("Order", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		qty:{
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		
		productId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'product_id',
			allowNull: false,
		},
		transactionId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'transaction_id',
			allowNull: false,
		},
		customerId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'customer_id',
			allowNull: false,
		},
		employeeId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'employee_id',
			allowNull: false,
		},
	}, {
		tableName: 'order',
		timestamps: true,
		underscored: true,
		freezeTableName: true
	});

	Order.associate = (models) => {
		Order.hasMany(models.Sell, {
			foreignKey: 'order_id',
			onDelete: 'casCade'
		});
		Order.hasMany(models.Invoice, {
			foreignKey: 'invoice_id',
			onDelete: 'NO ACTION'
		});

		Order.belongsTo(models.Employee, {
			foreignKey: 'employee_id',
			onDelete: 'NO ACTION'
		});
		Order.belongsTo(models.Customer, {
			foreignKey: 'customer_id',
			onDelete: 'NO ACTION'
		});
		Order.belongsTo(models.Product, {
			foreignKey: 'product_id',
			onDelete: 'NO ACTION'
		});
	}

	return Order;
};

