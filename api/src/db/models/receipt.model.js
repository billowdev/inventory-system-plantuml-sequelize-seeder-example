module.exports = (sequelize, DataTypes) => {
	const Receipt = sequelize.define("Receipt", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		totalPrice: {
			type: DataTypes.DECIMAL(10, 2),
			field: 'total_price',
			defaultValue: 0
		},
		orderId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'order_id',
			allowNull: false,
		},
	}, {
		tableName: 'receipt',
		timestamps: true,
		underscored: true,
		freezeTableName: true
	});

	Receipt.associate = (models) => {
		Receipt.belongsTo(models.Order, {
			foreignKey: 'order_id',
			onDelete: 'casCade'
		});
		Receipt.hasMany(models.Sell, {
			foreignKey: 'sell_id',
			onDelete: 'casCade'
		});
	}

	return Receipt;
};

