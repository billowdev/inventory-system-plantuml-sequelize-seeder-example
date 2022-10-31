const { Product, Category} = require('../db/models')

exports.findOne = async (id) => {
	try {
		return await Product.findOne({
			where: { id }
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.findAll = async () => {
	try {
		return await Product.findAll(
			{
			include: [
				{
				  model: Category,
				},
			  ],
		}
		)
	} catch (error) {
		throw new Error(error)
	}
}

exports.create = async (data) => {
	try {
		return await Product.create(data);
	} catch (error) {
		throw new Error(error)
	}
}

exports.update = async (id, data) => {
	try {
		return await Product.update({ ...data }, {
			where: { id }
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.delete = async (id) => {
	try {
		return await Product.delete({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}