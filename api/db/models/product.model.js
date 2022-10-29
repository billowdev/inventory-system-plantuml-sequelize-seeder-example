module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define("Product", {
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
		desc: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		brand: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'product',
		timestamps: false,
		freezeTableName: true
	});

	Product.associate = (models) => {
		Product.belongsTo(models.Category, {
			// foreignKey: 'category_id',
			// field: 'category_id',
			foreignKey: 'category_id',
			onDelete: 'NO ACTION'
		});
	}

	return Product;
};

