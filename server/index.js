const express =require('express')
const cors = require('cors')

const app=express()
app.use(cors())
app.use(express.json())


var route=require('./routers/routes')

app.use("/",route)

app.listen(9000,()=>{
    console.log("server is running")
})