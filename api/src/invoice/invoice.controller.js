const invoiceService = require("./invoice.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await invoiceService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get invoice was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get invoice was failed" })
	}
})
router.get("/", async (req, res) => {
	try {
		const data = await invoiceService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all invoice was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all invoice was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await invoiceService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create invoice was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create invoice was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await invoiceService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update invoice was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update invoice was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await invoiceService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete invoice was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete invoice was failed" })
	}
})

module.exports = router