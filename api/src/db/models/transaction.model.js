module.exports = (sequelize, DataTypes) => {
	const Transaction = sequelize.define("Transaction", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		status: {
			type: DataTypes.ENUM(["pending", "cancel", "complete",]),
			allowNull: false,
			defaultValue: "pending",
		},

	}, {
		tableName: 'transaction',
		timestamps: true,
		underscored: true,
		freezeTableName: true
	});

	Transaction.associate = (models) => {
		Transaction.hasManry(models.Order, {
			foreignKey: 'order_id',
		});

	}

	return Transaction;
};

