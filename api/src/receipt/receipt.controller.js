const receiptService = require("./receipt.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await receiptService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get receipt was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get receipt was failed" })
	}
})
router.get("/", async (req, res) => {
	try {
		const data = await receiptService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all receipt was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all receipt was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await receiptService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create receipt was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create receipt was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await receiptService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update receipt was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update receipt was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await receiptService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete receipt was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete receipt was failed" })
	}
})

module.exports = router