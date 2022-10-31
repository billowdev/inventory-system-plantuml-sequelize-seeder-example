const orderService = require("./order.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await orderService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get order was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get order was failed" })
	}
})
router.get("/", async (req, res) => {
	try {
		const data = await orderService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all order was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all order was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await orderService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create order was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create order was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await orderService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update order was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update order was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await orderService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete order was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete order was failed" })
	}
})

module.exports = router