module.exports = (sequelize, DataTypes) => {
	const Order = sequelize.define("Order", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},	
		invoiceId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'invoice_id',
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
		status: {
			type: DataTypes.ENUM(["complete", "pending", "cancel"]),
			allowNull: false,
			defaultValue: "pending",
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
			onDelete: 'NO ACTION'
		});

		Order.hasMany(models.Receipt, {
			foreignKey: 'order_id',
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
		Order.belongsTo(models.Invoice, {
			foreignKey: 'invoice_id',
			onDelete: 'NO ACTION'
		});
	}

	return Order;
};

