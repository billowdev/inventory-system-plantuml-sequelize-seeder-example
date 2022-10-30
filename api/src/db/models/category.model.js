module.exports = (sequelize, DataTypes) => {
	const Category = sequelize.define("Category", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		desc: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},
		{
			tableName: 'category',
			timestamps: true,
			freezeTableName: true,
			underscored: true,
		});

	Category.associate = (models) => {
		Category.hasMany(models.Product, { foreignKey: 'category_id'});
	}

	return Category;
};




