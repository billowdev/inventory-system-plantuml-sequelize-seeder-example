const employeeService = require("./employee.service");
const express = require('express');
const router = express.Router()

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await employeeService.findOne(id)
		return res.status(200).json({ success: true, data, msg: "get employee was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get employee was failed" })
	}
})
router.get("/", async (req, res) => {
	try {
		const data = await employeeService.findAll()
		return res.status(200).json({ success: true, data, msg: "get all employee was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, data: {}, msg: "get all employee was failed" })
	}

})

router.post("/", async (req, res) => {
	try {
		const data = await employeeService.create(req.body)
		return res.status(200).json({ success: true, data, msg: "create employee was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "create employee was failed" })
	}

})
router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await employeeService.update(id, req.body)
		return res.status(200).json({ success: true, data, msg: "update employee was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "update employee was failed" })
	}
})

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id
		const data = await employeeService.delete(id)
		return res.status(200).json({ success: true, data, msg: "delete employee was successfuly" });
	} catch (error) {
		return res.status(400).json({ success: false, msg: "delete employee was failed" })
	}
})

module.exports = router