const express = require("express");
const router = express.Router();

const { findAllProduct } = require("./product.service");

// Load Controllers
router.get("/", async (req, res) => {
	const data = await findAllProduct()
	res.json({ data })
});

module.exports = router;