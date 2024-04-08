const catchAsync = require("../utils/catchAsync")
const sendEmail = require("../utils/sendEmail")
const axios = require("axios")

const createRendez = catchAsync(async (req, res, next) => {
	const response = await axios.get("https://api64.ipify.org?format=json")
	const publicIP = response.data.ip
	console.log("Public IP:", publicIP)

	await sendEmail({
		to: "bejganadriss@gmail.com",
		subject: "rendez-vous",
		text: `${req.body.message} Public IP: ${publicIP}`,
	})
	res.status(201).json({ status: "success" })
})
module.exports = createRendez
