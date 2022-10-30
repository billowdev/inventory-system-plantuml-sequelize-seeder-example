const stockService = require("./stock.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await stockService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get stock was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get stock was failed" })
	}
})
router.get("/", async (req, res) => {
	try {
		const data = await stockService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all stock was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all stock was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await stockService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create stock was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create stock was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await stockService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update stock was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update stock was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await stockService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete stock was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete stock was failed" })
	}
})

module.exports = router