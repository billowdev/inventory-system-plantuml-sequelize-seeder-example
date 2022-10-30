const sellReportService = require("./sell-report.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await sellReportService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get sell report was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get sell report was failed" })
	}
})
router.get("/", async (req, res) => {
	try {
		const data = await sellReportService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all sell report was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all sell report was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await sellReportService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create sell report was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create sell report was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await sellReportService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update sell report was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update sell report was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await sellReportService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete sell report was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete sell report was failed" })
	}
})

module.exports = router