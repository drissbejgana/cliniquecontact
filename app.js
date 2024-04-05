const express = require("express")
const app = express()
const cors = require("cors")

const rendezsRouter = require("./routes/rendezsRouter")
app.use(
	cors({
		origin: "http://127.0.0.1:5501",
	})
)
app.use(express.json())

app.use("/api/v1/rendezs", rendezsRouter)

module.exports = app
