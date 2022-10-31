const customerService = require("./customer.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await customerService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get customer was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get customer was failed" })
	}
})
router.get("/", async (req, res) => {
	try {
		const data = await customerService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all customer was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all customer was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await customerService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create customer was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create customer was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await customerService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update customer was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update customer was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await customerService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete customer was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete customer was failed" })
	}
})

module.exports = router