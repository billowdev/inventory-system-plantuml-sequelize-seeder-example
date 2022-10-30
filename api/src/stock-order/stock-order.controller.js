const stockOrderService = require("./stock-order.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await stockOrderService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get stock order successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get stock order failed" })
	}
})
router.get("/", async (req, res) => {
	try {
		const data = await stockOrderService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all stock order successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all stock order failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await stockOrderService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create stock order successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create stock order failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await stockOrderService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update stock order successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update stock order failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await stockOrderService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete stock order successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete stock order failed" })
	}
})

module.exports = router