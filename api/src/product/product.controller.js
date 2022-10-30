const productService = require("./product.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await productService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get product was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get product was failed" })
	}
})
router.get("/", async (req, res) => {
	try {

		const data = await productService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all product was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all product was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await productService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create product was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create product was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await productService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update product was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update product was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await productService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete product was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete product failed" })
	}
})

module.exports = router