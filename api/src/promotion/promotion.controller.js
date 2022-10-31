const promotionService = require("./promotion.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await promotionService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get promotion was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get promotion was failed" })
	}
})
router.get("/", async (req, res) => {
	try {
		const data = await promotionService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all promotion was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all promotion was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await promotionService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create promotion was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create promotion was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await promotionService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update promotion was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update promotion was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await promotionService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete promotion was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete promotion was failed" })
	}
})

module.exports = router