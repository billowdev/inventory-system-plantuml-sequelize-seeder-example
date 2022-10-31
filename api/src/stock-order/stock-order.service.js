const { StockOrder } = require('../db/models')

exports.findOne = async (id) => {
	try {
		return await StockOrder.findOne({
			where: { id }
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.findAll = async () => {
	try {
		return await StockOrder.findAll()
	} catch (error) {
		throw new Error(error)
	}
}

exports.create = async (data) => {
	try {
		return await StockOrder.create(data);
	} catch (error) {
		throw new Error(error)
	}
}

exports.update = async (id, data) => {
	try {
		return await StockOrder.update({ ...data }, {
			where: { id }
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.delete = async (id) => {
	try {
		return await StockOrder.delete({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}