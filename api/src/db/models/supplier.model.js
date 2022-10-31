module.exports = (sequelize, DataTypes) => {
	const Supplier = sequelize.define("Supplier", {
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
		phone: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		addressId: {
			type: DataTypes.INTEGER,
			field: 'address_id',
			foreignKey: true
		},
	},
		{
			tableName: 'supplier',
			timestamps: true,
			underscored: true,
			freezeTableName: true
		});

	Supplier.associate = (models) => {
		Supplier.hasMany(models.StockOrder, { foreignKey: 'stock_order_id' });
		Supplier.belongsTo(models.Address, { foreignKey: 'address_id' });

	}

	return Supplier;
};




