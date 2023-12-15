const express=require('express')
const app = express()

var router=express.Router()

const{display,userReg}=require('../Controller/service')
router.route("/login").post(display)
router.route("/userregister").post(userReg)
module.exports=router