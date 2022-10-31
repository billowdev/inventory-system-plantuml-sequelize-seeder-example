const supplierService = require("./supplier.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await supplierService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get supplier was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get supplier was failed" })
	}
})
router.get("/", async (req, res) => {
	try {
		const data = await supplierService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all supplier was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all supplier was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await supplierService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create supplier was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create supplier was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await supplierService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update supplier was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update supplier was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await supplierService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete supplier was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete supplier was failed" })
	}
})

module.exports = router