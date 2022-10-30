module.exports = (sequelize, DataTypes) => {
	const Address = sequelize.define("Address", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		houseNumver: {
			type: DataTypes.STRING(5),
			field: 'house_number',
			allowNull: true
		},
		village: {
			type: DataTypes.STRING(75),
			allowNull: true
		},
		subDistrict: {
			type: DataTypes.STRING(75),
			field: 'sub_district',
			allowNull: true
		},
		district: {
			type: DataTypes.STRING(75),
			allowNull: false
		},
		province: {
			type: DataTypes.STRING(75),
			allowNull: false
		},
		zipCode: {
			type: DataTypes.STRING(10),
			field: 'zip_code',
			allowNull: false
		},
	},
		{
			tableName: 'address',
			timestamps: true,
			freezeTableName: true,
			underscored: true,
		});

	Address.associate = (models) => {
		Address.hasMany(models.Employee, { foreignKey: 'address_id' });
		Address.hasMany(models.Customer, { foreignKey: 'address_id' });
		Address.hasMany(models.Supplier, { foreignKey: 'address_id' });
	}

	return Address;
};




