require('dotenv').config();
const express=require('express')
const mongoose =require('mongoose')
const app=express()

app.use(express.json())
app.use("/api",require("./routes/peopleRoutes"))
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("database connected"))
.catch((err)=>console.err(err))







const port=5000
app.listen(port,()=> console.log("my server is running on port:",port))

