const { Promotion } = require('../db/models')

exports.findOne = async (id) => {
	try {
		return await Promotion.findOne({
			where: { id }
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.findAll = async () => {
	try {
		return await Promotion.findAll()
	} catch (error) {
		throw new Error(error)
	}
}

exports.create = async (data) => {
	try {
		return await Promotion.create(data);
	} catch (error) {
		throw new Error(error)
	}
}

exports.update = async (id, data) => {
	try {
		return await Promotion.update({ ...data }, {
			where: { id }
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.delete = async (id) => {
	try {
		return await Promotion.delete({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}