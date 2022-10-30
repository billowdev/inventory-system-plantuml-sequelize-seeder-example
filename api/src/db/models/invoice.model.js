module.exports = (sequelize, DataTypes) => {
	const Invoice = sequelize.define("Invoice", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		orderId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'order_id',
			allowNull: false,
		},
	}, {
		tableName: 'invoice',
		timestamps: true,
		underscored: true,
		freezeTableName: true
	});

	Invoice.associate = (models) => {
		Invoice.belongsTo(models.Order, {
			foreignKey: 'order_id',
			onDelete: 'casCade'
		});
	}

	return Invoice;
};

