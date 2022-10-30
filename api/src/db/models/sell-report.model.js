module.exports = (sequelize, DataTypes) => {
	const SellReport = sequelize.define("SellReport", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		revenue: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
			defaultValue: 0
		},
		totalQty: {
			type: DataTypes.INTEGER(),
			field: 'total_qty',
			defaultValue: 0
		},
		total: {
			type: DataTypes.DECIMAL(10, 2),
			defaultValue: 0
		},
		startDate: {
			type: DataTypes.DATE,
			field: 'start_date',
			defaultValue: new Date()
		},
		endDate: {
			type: DataTypes.DATE,
			field: 'end_date',
			defaultValue: new Date()
		},
		employeeId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'employee_id',
			allowNull: false,
		},
	}, {
		tableName: 'sell_report',
		timestamps: true,
		underscored: true,
		freezeTableName: true
	});

	SellReport.associate = (models) => {
		SellReport.belongsTo(models.Employee, {
			foreignKey: 'employee_id',
			onDelete: 'NO ACTION'
		});
	}

	return SellReport;
};

