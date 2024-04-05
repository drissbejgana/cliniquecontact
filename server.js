const dotenv = require("dotenv").config({ path: "./config.env" })
const cors = require("cors")

const app = require("./app")

app.listen(3000, () => {
	console.log("Server running on port 3000")
})
