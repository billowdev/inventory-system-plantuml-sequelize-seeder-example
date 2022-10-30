const userService = require("./user.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await userService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get user was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get user was failed" })
	}
})
router.get("/", async (req, res) => {
	try {

		const data = await userService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all user was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all user was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await userService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create user was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create user was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await userService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update user was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update user was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await userService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete user was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete user failed" })
	}
})

module.exports = router