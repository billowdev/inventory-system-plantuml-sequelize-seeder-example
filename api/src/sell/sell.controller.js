const sellService = require("./sell.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await sellService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get sell was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get sell was failed" })
	}
})
router.get("/", async (req, res) => {
	try {
		const data = await sellService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all sell was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all sell was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await sellService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create sell was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create sell was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await sellService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update sell was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update sell was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await sellService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete sell was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete sell was failed" })
	}
})

module.exports = router