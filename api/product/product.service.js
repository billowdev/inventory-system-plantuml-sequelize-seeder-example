const { Product } = require('../models')

exports.findAllProduct = async () => {
	try {
		const data = await Product.findAll()
		return data
	} catch (error) {

		throw new Error(error)
	}
}