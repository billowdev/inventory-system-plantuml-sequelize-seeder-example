const { Invoice, Employee} = require('../db/models')

exports.findOne = async (id) => {
	try {
		return await Invoice.findOne({
			where: { id }
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.findAll = async () => {
	try {
		return await Invoice.findAll({
			include: [

				{
					model: Employee,
				},

			],
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.create = async (data) => {
	try {
		return await Invoice.create(data);
	} catch (error) {
		throw new Error(error)
	}
}

exports.update = async (id, data) => {
	try {
		return await Invoice.update({ ...data }, {
			where: { id }
		})
	} catch (error) {
		throw new Error(error)
	}
}

exports.delete = async (id) => {
	try {
		return await Invoice.delete({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}