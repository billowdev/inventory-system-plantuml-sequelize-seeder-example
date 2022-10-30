const categoryService = require("./category.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await categoryService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get Category was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get Category was failed" })
	}
})
router.get("/", async (req, res) => {
	try {

		const data = await categoryService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all Category was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all Category was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await categoryService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create Category was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create Category was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await categoryService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update Category was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update Category was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await categoryService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete Category was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete Category failed" })
	}
})

module.exports = router