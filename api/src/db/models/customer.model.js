module.exports = (sequelize, DataTypes) => {
	const Customer = sequelize.define("Customer", {
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
			tableName: 'customer',
			timestamps: true,
			underscored: true,
			freezeTableName: true
		});

	Customer.associate = (models) => {
		Customer.hasMany(models.Order, { foreignKey: 'customer_id' });
		Customer.belongsTo(models.User, { foreignKey: 'user_id' });
		Customer.belongsTo(models.Address, { foreignKey: 'address_id' });

	}

	return Customer;
};




