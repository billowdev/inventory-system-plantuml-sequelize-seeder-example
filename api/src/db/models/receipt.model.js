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
		sellId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'sell_id',
			allowNull: false,
		},
	}, {
		tableName: 'receipt',
		timestamps: true,
		underscored: true,
		freezeTableName: true
	});

	Receipt.associate = (models) => {
		Receipt.belongsTo(models.Sell, {
			foreignKey: 'sell_id',
			onDelete: 'casCade'
		});
	}

	return Receipt;
};

