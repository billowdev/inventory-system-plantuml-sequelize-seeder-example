module.exports = (sequelize, DataTypes) => {
	const Employee = sequelize.define("Employee", {
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
		surname: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		phone: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		role: {
			type: DataTypes.ENUM(["ceo", "cashier", "manager", 'financial']),
			allowNull: false,
			defaultValue: "cashier",
		},
		addressId: {
			type: DataTypes.INTEGER,
			field: 'address_id',
			foreignKey: true
		},
		userId: {
			type: DataTypes.INTEGER,
			field: 'user_id',
			foreignKey: true
		},

	},
		{
			tableName: 'employee',
			timestamps: true,
			underscored: true,
			freezeTableName: true
		});

	Employee.associate = (models) => {
		// Employee.hasMany(models.Order, { foreignKey: 'employee_id' });
		// Employee.hasMany(models.SellReport, { foreignKey: 'employee_id' });
		// Employee.hasMany(models.Sell, { foreignKey: 'employee_id' });
		// Employee.hasMany(models.StockOrder, { foreignKey: 'employee_id' });

		Employee.belongsTo(models.User, { foreignKey: 'user_id' });
		Employee.belongsTo(models.Address, { foreignKey: 'address_id' });

	}

	return Employee;
};




