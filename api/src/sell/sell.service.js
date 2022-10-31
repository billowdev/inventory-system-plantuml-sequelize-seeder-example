const { Sell } = require('../db/models')

exports.findOne = async (id) => {
	try {
		return await Sell.findOne({
			where: { id }
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.findAll = async () => {
	try {
		return await Sell.findAll({
			include: [
				// {
				// 	model: Employee,
				// },
				// {
				// 	model: Product,
				// },
			],
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.create = async (data) => {
	try {
		return await Sell.create(data);
	} catch (error) {
		throw new Error(error)
	}
}

exports.update = async (id, data) => {
	try {
		return await Sell.update({ ...data }, {
			where: { id }
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.delete = async (id) => {
	try {
		return await Sell.delete({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}