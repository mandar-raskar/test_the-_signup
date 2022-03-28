var express = require("express")
var router = express.Router();
var signupData = require("../controllers/signup") 

router.post("/signup", signupData.signup)


module.exports = router