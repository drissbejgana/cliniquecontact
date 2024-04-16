const dotenv = require("dotenv").config({ path: "./config.env" })
const express = require("express")
const app = express()
const cors = require("cors")

const rendezsRouter = require("./routes/rendezsRouter")
const applys=require("./routes/applysRouter")

app.use(
	cors({
		origin: ["https://cliniquerrahma.ma","https://centrederadiologiebenguerir.ma"],

	})
)

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: true }));


app.use("/api/v1/rendezs", rendezsRouter)

app.use("/api/v1/applys",applys)


app.listen(3000, () => {
	console.log("Server running on port 3000")
})
