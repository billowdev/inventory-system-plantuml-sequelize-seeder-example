const { Order, Customer, Employee, Invoice } = require('../db/models')

exports.findOne = async (id) => {
	try {
		return await Order.findOne({
			where: { id }
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.findAll = async () => {
	try {
		return await Order.findAll({
			include: [
				{
					model: Customer,
				},
				{
					model: Employee,
				},
				{
					model: Invoice,
				},
			],
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.create = async (data) => {
	try {
		return await Order.create(data);
	} catch (error) {
		throw new Error(error)
	}
}

exports.update = async (id, data) => {
	try {
		return await Order.update({ ...data }, {
			where: { id }
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.delete = async (id) => {
	try {
		return await Order.delete({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}