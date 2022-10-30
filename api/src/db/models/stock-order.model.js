
module.exports = (sequelize, DataTypes) => {
	const StockOrder = sequelize.define("StockOrder", {
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

		supplierId: {
			type: DataTypes.INTEGER,
			field: 'supplier_id',
			foreignKey: true
		},

		productId: {
			type: DataTypes.INTEGER,
			field: 'product_id',
			foreignKey: true
		},
		employeeId: {
			type: DataTypes.INTEGER,
			field: 'employee_id',
			foreignKey: true
		},
	}, {
		tableName: 'stock_order',
		timestamps: true,
		underscored: true,
		freezeTableName: true
	});

	StockOrder.associate = (models) => {
		StockOrder.belongsTo(models.Product, {
			foreignKey: 'product_id',
			onDelete: 'casCade'
		});
		StockOrder.belongsTo(models.Employee, {
			foreignKey: 'employee_id',
			onDelete: 'casCade'
		});
		StockOrder.belongsTo(models.Supplier, {
			foreignKey: 'supplier_id',
			onDelete: 'casCade'
		});
	}

	return StockOrder;
};

