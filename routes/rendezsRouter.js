const { Router } = require("express")
const createRendez = require("../controllers/rendezsController")

const router = Router()

router.route("/").post(createRendez)

module.exports = router
