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
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		brand: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			defaultValue: 0
		},
		exp: {
			type: DataTypes.DATE(),
			defaultValue: new Date(),
			allowNull: false
		},
		mfg: {
			type: DataTypes.DATE(),
			defaultValue: new Date(),
			allowNull: false
		},
		categoryId: {
			type: DataTypes.INTEGER,
			field: 'category_id',
			foreignKey: true
		},
	}, {
		tableName: 'product',
		timestamps: true,
		underscored: true,
		freezeTableName: true
	});

	Product.associate = (models) => {
		Product.belongsTo(models.Category, {
			foreignKey: 'category_id',
			onDelete: 'NO ACTION'
		});

		Product.hasMany(models.Stock, {
			foreignKey: 'product_id',
			onDelete: 'NO ACTION'
		});
		Product.hasMany(models.StockOrder, {
			foreignKey: 'product_id',
			onDelete: 'NO ACTION'
		});
		Product.hasMany(models.Promotion, {
			foreignKey: 'product_id',
			onDelete: 'NO ACTION'
		});
		Product.hasMany(models.Sell, {
			foreignKey: 'product_id',
			onDelete: 'NO ACTION'
		});

	}

	return Product;
};

