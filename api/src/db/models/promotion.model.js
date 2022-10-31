module.exports = (sequelize, DataTypes) => {
	const Promotion = sequelize.define("Promotion", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncreatement: true,
			allowNull: false,
		},
		desc: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		discountPercent: {
			type: DataTypes.DECIMAL(10, 2),
			field: 'discount_percent',
			defaultValue: 0
		},
		discountValue: {
			type: DataTypes.DECIMAL(10, 2),
			field: 'discount_value',
			defaultValue: 0
		},
		iat: {
			type: DataTypes.DATE(),
			field: 'iat',
			defaultValue: new Date(),
			allowNull: false
		},
		exp: {
			type: DataTypes.DATE(),
			field: 'exp',
			defaultValue: new Date(),
			allowNull: false
		},
		productId: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			field: 'product_id',
			allowNull: false,
		},
	}, {
		tableName: 'promotion',
		timestamps: true,
		underscored: true,
		freezeTableName: true
	});

	Promotion.associate = (models) => {
		Promotion.belongsTo(models.Product, {
			foreignKey: 'product_id',
			onDelete: 'casCade'
		});
	}

	return Promotion;
};

