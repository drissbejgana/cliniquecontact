const { Router } = require("express")

const router = Router()
router.route("/").post(applyJob)

module.exports = router
