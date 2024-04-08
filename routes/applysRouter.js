const { Router } = require("express")
const {applys,upload} = require("../controllers/applyController")

const router = Router()
router.post("/", upload.single('resume'), applys);


module.exports = router
