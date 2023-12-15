const toduModel= require('../databaseconfig/config_db')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const display=(req,res)=>{
    console.log("done");
    const{email,password}= req.body;
    toduModel.findOne({email :email})
    .then(async(user) =>{
        if(user){
            const encrpt=await bcrypt.compare(password,user.password)
            if(encrpt){
                res.json({data:"success"})
            }
            else{
                res.json('the password is incorrect  ')
            }
        }else{
            res.json("No record existed")
        }
    })
}


const userReg=async(req,res)=>{
    console.log("done",req.body);
    const hashpassword=await bcrypt.hash(req.body.password, saltRounds)
    req.body.password=hashpassword
    toduModel.create(req.body)
    .then(details =>res.json(details))
    .catch(err=>res.json(err))
 }



module.exports={
    display,
    userReg
}