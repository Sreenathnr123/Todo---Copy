const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/todo")

const toduSchema = mongoose.Schema({
    username :String,
    email : String,
    password :String
})

const toduModel = mongoose.model("details",toduSchema)


module.exports=toduModel