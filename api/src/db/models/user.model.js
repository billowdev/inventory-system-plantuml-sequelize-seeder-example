module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		hashPassword: {
			type: DataTypes.STRING(150),
			field: 'hash_password',
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		role: {
			type: DataTypes.ENUM(["admin", "customer", "employee"]),
			allowNull: false,
			defaultValue: "customer",
		},
		lastLogin: {
			type: DataTypes.DATE(),
			field: 'last_login',
			allowNull: true
		},

	},
		{
			tableName: 'user',
			timestamps: true,
			underscored: true,
			freezeTableName: true,

		});

	User.associate = (models) => {
		User.hasMany(models.Employee, { foreignKey: 'user_id' });
		User.hasMany(models.Customer, { foreignKey: 'user_id' });

	}

	return User;
};




