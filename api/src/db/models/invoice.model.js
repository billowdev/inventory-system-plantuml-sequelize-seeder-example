module.exports = (sequelize, DataTypes) => {
	const Invoice = sequelize.define("Invoice", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		employeeId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'employee_id',
			allowNull: false,
		},
	}, {
		tableName: 'invoice',
		timestamps: true,
		underscored: true,
		freezeTableName: true
	});

	Invoice.associate = (models) => {
		Invoice.belongsTo(models.Employee, {
			foreignKey: 'employee_id',
			onDelete: 'NO ACTION'
		});

		Invoice.hasMany(models.Order, {
			foreignKey: 'invoice_id',
			onDelete: 'NO ACTION'
		});

		Invoice.hasMany(models.StockOrder, {
			foreignKey: 'invoice_id',
			onDelete: 'NO ACTION'
		});
	}

	return Invoice;
};

