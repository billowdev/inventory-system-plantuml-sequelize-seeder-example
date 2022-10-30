const addressService = require("./address.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await addressService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get address was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get address was failed" })
	}
})
router.get("/", async (req, res) => {
	try {

		const data = await addressService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all address was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all address was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await addressService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create address was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create address was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await addressService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update address was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update address was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await addressService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete address was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete address failed" })
	}
})

module.exports = router